import fs from "fs";
import path from "path";

export interface LectureMetadata {
  slug: string;
  title: string;
  description: string;
  week: number;
  date?: string;
}

const LECTURES_DIR = path.join(process.cwd(), "src/content/lectures");

function slugToTitle(slug: string): string {
  return slug
    .replace(/^week-\d+-?/, "")
    .split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
}

function parseFrontmatter(fileContent: string): Record<string, string> {
  const frontmatterRegex = /^---\r?\n([\s\S]*?)\r?\n---/;
  const match = fileContent.match(frontmatterRegex);
  if (!match) return {};

  const lines = match[1].split("\n");
  const data: Record<string, string> = {};

  for (const line of lines) {
    const trimmed = line.trim();
    if (!trimmed || trimmed.startsWith("#")) continue;
    const colonIndex = trimmed.indexOf(":");
    if (colonIndex === -1) continue;

    const key = trimmed.slice(0, colonIndex).trim();
    let value = trimmed.slice(colonIndex + 1).trim();

    // Strip wrapping single or double quotes
    if (
      (value.startsWith('"') && value.endsWith('"')) ||
      (value.startsWith("'") && value.endsWith("'"))
    ) {
      value = value.slice(1, -1).trim();
    }

    data[key] = value;
  }

  return data;
}

export function getLectures(): LectureMetadata[] {
  if (!fs.existsSync(LECTURES_DIR)) {
    return [];
  }

  const files = fs.readdirSync(LECTURES_DIR);

  const lectures: LectureMetadata[] = files
    .filter((file) => file.endsWith(".mdx"))
    .map((file) => {
      const slug = file.replace(/\.mdx$/, "");
      const fullPath = path.join(LECTURES_DIR, file);
      const fileContent = fs.readFileSync(fullPath, "utf-8");
      const data = parseFrontmatter(fileContent);

      const weekNumber = data.week ? parseInt(data.week, 10) : 0;
      const title = data.title || slugToTitle(slug);
      const description = data.description || "Lecture content and notes.";
      const date = data.date;

      return {
        slug,
        title,
        description,
        week: isNaN(weekNumber) ? 0 : weekNumber,
        date,
      };
    });

  return lectures.sort((a, b) => a.week - b.week);
}

export function getLecture(slug: string): LectureMetadata | undefined {
  const lectures = getLectures();
  return lectures.find((l) => l.slug === slug);
}
