import { signInAction, resendVerificationAction } from "@/app/actions";
import { FormMessage, Message } from "@/components/form-message";
import Navbar from "@/components/navbar";
import { SubmitButton } from "@/components/submit-button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { SmtpMessage } from "../smtp-message";
import Link from "next/link";
import { useState } from "react";
import { Mail, RefreshCw } from "lucide-react";

interface LoginProps {
  searchParams: Promise<Message>;
}

export default async function SignInPage({ searchParams }: LoginProps) {
  const message = await searchParams;

  if ("message" in message) {
    return (
      <div className="flex h-screen w-full flex-1 items-center justify-center p-4 sm:max-w-md">
        <FormMessage message={message} />
      </div>
    );
  }

  // Check if this is an email verification related error
  const isEmailVerificationError =
    message &&
    "error" in message &&
    (message.error.includes("email") ||
      message.error.includes("verification") ||
      message.error.includes("confirmed"));

  return (
    <>
      <Navbar />
      <div className="flex min-h-screen flex-col items-center justify-center bg-background px-4 py-8">
        <div className="w-full max-w-md rounded-lg border border-border bg-card p-6 shadow-sm">
          <form className="flex flex-col space-y-6">
            <div className="space-y-2 text-center">
              <h1 className="text-3xl font-semibold tracking-tight">Sign in</h1>
              <p className="text-sm text-muted-foreground">
                Don't have an account?{" "}
                <Link
                  className="text-primary font-medium hover:underline transition-all"
                  href="/sign-up"
                >
                  Sign up
                </Link>
              </p>
            </div>

            <div className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="email" className="text-sm font-medium">
                  Email
                </Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="you@example.com"
                  required
                  className="w-full"
                />
              </div>

              <div className="space-y-2">
                <div className="flex justify-between items-center">
                  <Label htmlFor="password" className="text-sm font-medium">
                    Password
                  </Label>
                  <Link
                    className="text-xs text-muted-foreground hover:text-foreground hover:underline transition-all"
                    href="/forgot-password"
                  >
                    Forgot Password?
                  </Link>
                </div>
                <Input
                  id="password"
                  type="password"
                  name="password"
                  placeholder="Your password"
                  required
                  className="w-full"
                />
              </div>
            </div>

            <SubmitButton
              className="w-full"
              pendingText="Signing in..."
              formAction={signInAction}
            >
              Sign in
            </SubmitButton>

            <FormMessage message={message} />

            {/* Email Verification Helper */}
            {isEmailVerificationError && (
              <div className="mt-4 p-4 bg-blue-50 border border-blue-200 rounded-lg">
                <div className="flex items-start gap-3">
                  <Mail className="h-5 w-5 text-blue-600 mt-0.5" />
                  <div className="flex-1">
                    <h3 className="text-sm font-medium text-blue-900 mb-2">
                      Email Verification Required
                    </h3>
                    <p className="text-sm text-blue-700 mb-3">
                      To access your account, please verify your email address
                      by clicking the link we sent to your inbox.
                    </p>
                    <form
                      action={resendVerificationAction}
                      className="space-y-2"
                    >
                      <input type="hidden" name="email" id="resend-email" />
                      <SubmitButton
                        size="sm"
                        variant="outline"
                        className="text-blue-700 border-blue-300 hover:bg-blue-100"
                        pendingText="Sending..."
                        onClick={(e) => {
                          const emailInput = document.getElementById(
                            "email",
                          ) as HTMLInputElement;
                          const resendEmailInput = document.getElementById(
                            "resend-email",
                          ) as HTMLInputElement;
                          if (emailInput && resendEmailInput) {
                            resendEmailInput.value = emailInput.value;
                          }
                        }}
                      >
                        <RefreshCw className="h-4 w-4 mr-2" />
                        Resend Verification Email
                      </SubmitButton>
                    </form>
                  </div>
                </div>
              </div>
            )}
          </form>
        </div>

        {/* Show SMTP message only if there's an email verification issue */}
        {isEmailVerificationError && <SmtpMessage />}
      </div>
    </>
  );
}
