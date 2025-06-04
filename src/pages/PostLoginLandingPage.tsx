import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Sidebar from '@/components/layout/Sidebar'; // Custom Sidebar
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardContent, CardDescription } from "@/components/ui/card";
import { Label } from "@/components/ui/label"; // Example, might not be directly used here
import { Home, Settings, LogOut, LayoutDashboard, BarChart, Users, FileText, ShieldQuestion } from 'lucide-react';

const PostLoginLandingPage: React.FC = () => {
  const navigate = useNavigate();
  console.log('PostLoginLandingPage loaded');

  const handleLogout = () => {
    // Perform logout actions: clear token, etc.
    console.log('User logged out');
    navigate('/login');
  };

  const navItems = [
    { href: "/dashboard", label: "Dashboard", icon: <LayoutDashboard className="h-5 w-5" /> },
    { href: "/dashboard/analytics", label: "Analytics", icon: <BarChart className="h-5 w-5" /> },
    { href: "/dashboard/users", label: "User Management", icon: <Users className="h-5 w-5" /> },
    { href: "/dashboard/reports", label: "Reports", icon: <FileText className="h-5 w-5" /> },
  ];

  return (
    <div className="flex min-h-screen bg-gray-100 dark:bg-gray-900">
      <Sidebar className="hidden md:flex md:flex-col md:w-64 bg-white dark:bg-gray-800 border-r dark:border-gray-700">
        <div className="p-4 mb-4 border-b dark:border-gray-700">
          <Link to="/dashboard" className="flex items-center space-x-2">
            <ShieldQuestion className="h-8 w-8 text-primary" />
            <h1 className="text-xl font-bold text-gray-800 dark:text-white">AppPanel</h1>
          </Link>
        </div>
        <nav className="flex-1 px-2 space-y-1">
          {navItems.map((item) => (
            <Link
              key={item.href}
              to={item.href}
              className="group flex items-center px-2 py-2 text-sm font-medium rounded-md text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 hover:text-gray-900 dark:hover:text-white"
            >
              {item.icon && <span className="mr-3">{item.icon}</span>}
              {item.label}
            </Link>
          ))}
        </nav>
        <div className="mt-auto p-2 border-t border-gray-200 dark:border-gray-700">
            <Button variant="ghost" onClick={handleLogout} className="w-full justify-start text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700">
                <LogOut className="mr-3 h-5 w-5" />
                Logout
            </Button>
        </div>
      </Sidebar>

      <div className="flex-1 flex flex-col">
        <header className="bg-white dark:bg-gray-800 shadow-sm sticky top-0 z-40">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between h-16 items-center">
              <div className="flex items-center">
                {/* Can have a breadcrumb or current page title here */}
                <NavigationMenu className="hidden md:flex">
                  <NavigationMenuList>
                    <NavigationMenuItem>
                      <Link to="/dashboard">
                        <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                          <Home className="mr-2 h-4 w-4" /> Dashboard
                        </NavigationMenuLink>
                      </Link>
                    </NavigationMenuItem>
                    {/* Add more top-level navigation if needed */}
                  </NavigationMenuList>
                </NavigationMenu>
                 <Button variant="ghost" size="icon" className="md:hidden mr-2" aria-label="Open sidebar">
                    {/* Placeholder for mobile sidebar toggle icon */}
                    <LayoutDashboard className="h-6 w-6" />
                 </Button>
              </div>
              
              <div className="flex items-center">
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="ghost" className="relative h-10 w-10 rounded-full">
                      <Avatar className="h-9 w-9">
                        <AvatarImage src="https://ui.shadcn.com/avatars/01.png" alt="User Avatar" />
                        <AvatarFallback>JD</AvatarFallback>
                      </Avatar>
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent className="w-56" align="end" forceMount>
                    <DropdownMenuLabel className="font-normal">
                      <div className="flex flex-col space-y-1">
                        <p className="text-sm font-medium leading-none">John Doe</p>
                        <p className="text-xs leading-none text-muted-foreground">
                          user@example.com
                        </p>
                      </div>
                    </DropdownMenuLabel>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem>
                      <Settings className="mr-2 h-4 w-4" />
                      <span>Account Settings</span>
                    </DropdownMenuItem>
                    <DropdownMenuItem onClick={handleLogout}>
                      <LogOut className="mr-2 h-4 w-4" />
                      <span>Log out</span>
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>
            </div>
          </div>
        </header>

        <main className="flex-1 p-6 space-y-6">
          <div className="flex justify-between items-center">
            <h2 className="text-3xl font-semibold text-gray-800 dark:text-white">Dashboard Overview</h2>
            <Button>
              <FileText className="mr-2 h-4 w-4" /> Create New Report
            </Button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Total Revenue</CardTitle>
                <Users className="h-4 w-4 text-muted-foreground" /> {/* Placeholder icon */}
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">$45,231.89</div>
                <p className="text-xs text-muted-foreground">+20.1% from last month</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Active Users</CardTitle>
                <BarChart className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">+2350</div>
                <p className="text-xs text-muted-foreground">+180.1% from last month</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">New Signups</CardTitle>
                <LayoutDashboard className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">+120</div>
                <p className="text-xs text-muted-foreground">+15 since last hour</p>
              </CardContent>
            </Card>
          </div>

          <Card>
            <CardHeader>
              <CardTitle>Recent Activity</CardTitle>
              <CardDescription>An overview of recent activities in your account.</CardDescription>
            </CardHeader>
            <CardContent>
              {/* Placeholder for more complex content, e.g., a table or list */}
              <Label className="text-gray-600 dark:text-gray-400">Placeholder for recent activity feed...</Label>
              <ul className="mt-2 space-y-2 text-sm text-gray-700 dark:text-gray-300">
                <li>- User 'jane@example.com' updated their profile.</li>
                <li>- New report 'Q3 Sales' generated.</li>
                <li>- System maintenance scheduled for _Tommorow at 2 AM.</li>
              </ul>
            </CardContent>
          </Card>
        </main>
      </div>
    </div>
  );
};

export default PostLoginLandingPage;