import { Provider, User } from "@supabase/supabase-js";
import { ReactNode } from "react";
type PageName = "Home" | "settings" | "users" | "help";

interface NavItemProps {
  icon: ReactNode;
  text: string;
  active: boolean;
  onClick: () => void;
}
interface PageContentProps {
  page: PageName;
}

/**
 * Interface representing a single record in the 'books' table.
 */
export interface Book {
  /**
   * Primary key for the book record, corresponds to `book_id` (SERIAL NOT NULL).
   */
  book_id: number;
  /**
   * The full name of the book, corresponds to `name` (text NOT NULL).
   */
  name: string;
  /**
   * The abbreviation of the book, corresponds to `abbreviation` (text NOT NULL).
   */
  abbreviation: string;
  /**
   * The testament (e.g., Old Testament, New Testament), corresponds to `testament` (text NOT NULL).
   */
  testament: string;
  /**
   * The order of the book within the bible, corresponds to `order_in_bible` (integer NOT NULL).
   */
  order_in_bible: number;
  /**
   * The chapter number, corresponds to `chapter` (integer NOT NULL).
   */
  chapter: number;
  /**
   * The verse number, corresponds to `verses` (integer NOT NULL).
   */
  verses: number;
  /**
   * The text of the verse, corresponds to `verses_text` (text NOT NULL).
   */
  verses_text: string;
  /**
   * The name of the chapter, corresponds to `chapter_name` (text). This field can be null.
   */
  chapter_name: string | null;
}

export interface AuthContextValue {
  isLoading: boolean;
  error: Error | null;
  user: User | null;
  sginInWith: (provider: Provider) => Promise<void>;
  signOut: () => Promise<void>;
}

export type { PageName, NavItemProps, PageContentProps };
