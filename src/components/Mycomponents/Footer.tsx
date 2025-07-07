export default function Footer() {
  return (
    <footer className="mt-auto text-center py-6 text-sm text-muted-foreground border-t">
      © {new Date().getFullYear()} BLACKCAT. All rights reserved.
    </footer>
  );
}