import { personalInfo } from "@/lib/data";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-background py-6 border-t">
      <div className="container mx-auto text-center text-muted-foreground text-sm">
        <p>&copy; {currentYear} {personalInfo.name}. All Rights Reserved.</p>
      </div>
    </footer>
  );
}
