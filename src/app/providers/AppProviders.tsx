import { PageProvider } from "../../featured/page/providers/PageProvider";
import { SearchProvider } from "../../featured/project/search/providers/SearchProvider"
import { ProjectProvider } from "../../featured/project/providers/ProjectProvider";
import { AuthProvier } from "../../featured/auth/providers/AuthProvider";
import { type ReactNode } from "react";

export function AppProviders({ children }: { children: ReactNode }) {
  return (
    <PageProvider>
      <SearchProvider>
        <AuthProvier>
          <ProjectProvider>{children}</ProjectProvider>
        </AuthProvier>
      </SearchProvider>
    </PageProvider>
  );
}
