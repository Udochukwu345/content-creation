"use client";

import { useState } from "react";
import { Upload } from "lucide-react";
import { Button } from "@/components/ui/button";
import { createClient } from "@supabase/supabase-js";

// Client-side Supabase instance
const supabaseUrl = "https://zqlaohmrnnzqgryvcvky.supabase.co";
const supabaseAnonKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InpxbGFvaG1ybm56cWdyeXZjdmt5Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDg0MjgzMzEsImV4cCI6MjA2NDAwNDMzMX0.lOpSRPkT-AEc6EYYcFHWao9hTEOPYCikOjtiSTcMBWA";

if (!supabaseUrl || !supabaseAnonKey) {
  throw new Error("Missing Supabase environment variables.");
}

const supabase = createClient(supabaseUrl, supabaseAnonKey);

export default function VideoUploadButton() {
  const [uploading, setUploading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [videoUrl, setVideoUrl] = useState<string | null>(null);

interface HandleFileChangeEvent extends React.ChangeEvent<HTMLInputElement> {}

interface PublicUrlData {
    publicUrl: string;
}

async function handleFileChange(e: HandleFileChangeEvent): Promise<void> {
    const file: File | undefined = e.target.files?.[0];
    if (!file) return;

    setUploading(true);
    setError(null);

    try {
        const fileName: string = `${Date.now()}-${file.name}`;

        // Upload to Supabase Storage
        const { error: uploadError }: { error: Error | null } = await supabase.storage
            .from("videos") // your bucket name
            .upload(fileName, file);

        if (uploadError) throw uploadError;

        // Get public URL
        const { data }: { data: PublicUrlData } = supabase.storage
            .from("videos")
            .getPublicUrl(fileName);

        setVideoUrl(data.publicUrl);
    } catch (err: unknown) {
        if (err instanceof Error) {
            setError(err.message);
        } else {
            setError("An unknown error occurred.");
        }
    } finally {
        setUploading(false);
    }
}

  return (
    <div className="flex flex-col items-center gap-3">
      <label>
        <input
          type="file"
          accept="video/*"
          className="hidden"
          onChange={handleFileChange}
        />
        <Button
          className="flex items-center gap-2"
          disabled={uploading}
          asChild
        >
          <span>
            <Upload className="h-4 w-4" />
            {uploading ? "Uploading..." : "Upload New Video"}
          </span>
        </Button>
      </label>

      {error && <p className="text-red-500 text-sm">{error}</p>}
      {videoUrl && (
        <video
          src={videoUrl}
          controls
          className="max-w-full rounded-lg border"
        />
      )}
    </div>
  );
}
