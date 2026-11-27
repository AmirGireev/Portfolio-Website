/** Navigation config */

export interface NavItem {
  label: string;
  href: string;
  order: number;
}

export const navItems: NavItem[] = [
  { label: 'Projects', href: '/projects', order: 1 },
  { label: 'About', href: '/about', order: 2 },
];

/** Sorted items */
export function getNavItems(): NavItem[] {
  return [...navItems].sort((a, b) => a.order - b.order);
}
