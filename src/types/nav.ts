export interface NavItem {
  title: string;
  href: string;
  disabled?: boolean;
  external?: boolean;
  badge?: string;
}

export interface FooterSection {
  title: string;
  items: NavItem[];
}
