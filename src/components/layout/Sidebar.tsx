import React from 'react';
import { ScrollArea } from "@/components/ui/scroll-area";
import { cn } from "@/lib/utils"; // For combining class names

interface SidebarProps {
  children?: React.ReactNode;
  className?: string;
  // Example: Navigation items can be passed as props
  // navItems?: { href: string; label: string; icon?: React.ReactNode }[];
}

const Sidebar: React.FC<SidebarProps> = ({ children, className /*, navItems */ }) => {
  console.log("Rendering Sidebar component");

  // A common use case for a sidebar on a PostLoginLandingPage is navigation.
  // This component is a flexible container. You can pass navigation links
  // directly as children, or enhance this component to accept `navItems` prop.

  return (
    <aside
      className={cn(
        "hidden md:flex md:flex-col md:w-64 bg-gray-50 border-r border-gray-200 dark:bg-gray-900 dark:border-gray-800 p-4 space-y-4",
        className
      )}
    >
      {/* Optional: A fixed header or logo area for the sidebar */}
      {/* <div className="p-2 mb-2">
        <h2 className="text-lg font-semibold">Dashboard</h2>
      </div> */}

      <ScrollArea className="flex-1">
        {children ? (
          <nav className="space-y-2">
            {children}
          </nav>
        ) : (
          <div className="text-sm text-gray-500">
            {/* Placeholder content if no children are provided */}
            <p>Sidebar content goes here.</p>
            <p>You can add navigation links or other components as children.</p>
            {/* Example placeholder structure for nav items if not passed as children
            {navItems && navItems.length > 0 ? (
              <nav className="space-y-1">
                {navItems.map((item) => (
                  <a
                    key={item.href}
                    href={item.href}
                    className="group flex items-center px-2 py-2 text-sm font-medium rounded-md text-gray-700 hover:bg-gray-100 hover:text-gray-900 dark:text-gray-300 dark:hover:bg-gray-800 dark:hover:text-gray-50"
                  >
                    {item.icon && <span className="mr-3 h-5 w-5">{item.icon}</span>}
                    {item.label}
                  </a>
                ))}
              </nav>
            ) : (
              <p>No navigation items configured.</p>
            )}
            */}
          </div>
        )}
      </ScrollArea>

      {/* Optional: A fixed footer area for the sidebar */}
      {/* <div className="mt-auto p-2 border-t border-gray-200 dark:border-gray-700">
        <p className="text-xs text-gray-500">User: example@user.com</p>
      </div> */}
    </aside>
  );
};

export default Sidebar;