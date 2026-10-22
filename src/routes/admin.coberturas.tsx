import { createFileRoute } from "@tanstack/react-router";
import { PageTitle, Card } from "@/components/kit";
import { pageHead } from "@/lib/format";

export const Route = createFileRoute("/admin/coberturas")({
  head: () => pageHead("Coberturas", "Coberturas — Centro Médico Salud Integral (demo)."),
  component: () => (
    <>
      <PageTitle title="Coberturas" subtitle="Pantalla en preparación para la demostración." />
      <Card className="p-8 text-sm text-muted-foreground">Esta sección todavía no está terminada.</Card>
    </>
  ),
});
