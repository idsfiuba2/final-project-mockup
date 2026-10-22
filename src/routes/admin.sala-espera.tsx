import { createFileRoute } from "@tanstack/react-router";
import { PageTitle, Card } from "@/components/kit";
import { pageHead } from "@/lib/format";

export const Route = createFileRoute("/admin/sala-espera")({
  head: () => pageHead("Sala de espera", "Sala de espera — Centro Médico Salud Integral (demo)."),
  component: () => (
    <>
      <PageTitle title="Sala de espera" subtitle="Pantalla en preparación para la demostración." />
      <Card className="p-8 text-sm text-muted-foreground">Esta sección todavía no está terminada.</Card>
    </>
  ),
});
