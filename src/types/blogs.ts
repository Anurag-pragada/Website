export type BlogPost = {
  id: string;
  title: string;
  slug: string;
  category: string;
  date: string;
  intro?: string | (string | InlineContent)[] | InlineContent[][];
  sections: BlogSection[];
};

export type RichTextContent = string | { type: "link"; text: string; url: string } | { type: "bold"; text: string };

export type LinkContent = {
  type: "link";
  text?: string;
  url: string;
};

export type InlineContent =
  | {
      type: "paragraph";
      text: string | RichTextContent[] | { type: "bold"; text: string };
    }
  | {
      type: "list";
      items: string[];
    }
  | {
      type: "table";
      rows: string[][];
    }
  | { type: "bold"; text: string };

export type BlogContentBlock =
  | {
      type: "paragraph";
      text: string | RichTextContent[] ;
    }
  | {
      type: "list";
      items: (string | RichTextContent[] | LinkContent)[];
    }
  | {
      type: "table";
      rows: string[][];
    }
  | {
      type: "image";
      src: string;
      caption?: string;
      link?: string;
    }
  | {
      type: "subheading";
      text: string;
    }
  | LinkContent;

export type BlogSection = {
  id?: string;
  title?: string;
  content?: BlogContentBlock[];
  images?: BlogImage[];
};

export type BlogImage = {
  src: string;
  caption?: string;
};