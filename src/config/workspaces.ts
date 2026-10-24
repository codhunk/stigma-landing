export interface WorkspaceTab {
  id: "superadmin" | "teacher" | "parent";
  label: string;
  iconName: string;
}

export const workspaceTabs: WorkspaceTab[] = [
  { id: "superadmin", label: "Super Admin Console", iconName: "Building2" },
  { id: "teacher", label: "Principal & Faculty", iconName: "GraduationCap" },
  { id: "parent", label: "Parent & Scholar App", iconName: "Users" },
];
