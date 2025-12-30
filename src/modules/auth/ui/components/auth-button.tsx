"use client";

import { UserCircleIcon, UserIcon, ClapperboardIcon } from "lucide-react";
import { UserButton, SignInButton, SignedIn, SignedOut } from "@clerk/nextjs";
import { Button } from "@/components/ui/button";

export const AuthButton = () => {
    return (
        <>
            <SignedIn>
                <UserButton>
                    <UserButton.MenuItems>
                        <UserButton.Link
                            label="My profile"
                            href="/users/current"
                            labelIcon={<UserIcon className="size-4" />}
                        />
                        <UserButton.Link
                            label="Studio"
                            href="/studio"
                            labelIcon={<ClapperboardIcon className="size-4" />}
                        />
                        <UserButton.Action label="manageAccount" />
                    </UserButton.MenuItems>
                </UserButton>
            </SignedIn>
            <SignedOut>
                <SignInButton mode="modal">
                    <Button
                        variant="outline"
                        className="px-4 py-2 text-sm font-medium text-blue-600 hover:bg-blue-500 border-blue-500/20 rounded-full shadow-none [] "
                    >
                        <UserCircleIcon className="size-4" />
                        Sign in
                    </Button>
                </SignInButton>
            </SignedOut>
        </>
    );
}