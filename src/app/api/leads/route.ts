import { NextResponse } from "next/server";
import { leadSchema, buildReference } from "@/lib/leads";

/**
 * Recepción de consultas de reserva.
 *
 * ESTADO ACTUAL: valida, genera la referencia y la registra en los logs del
 * servidor. Todavía NO persiste — la base de datos entra en la fase de
 * backend (Cloudflare D1 + Drizzle), junto con el panel /admin.
 *
 * Cuando llegue esa fase, lo único que cambia acá es reemplazar el
 * `console.info` por el insert. La validación, la referencia y la atribución
 * ya están resueltas.
 */
export async function POST(request: Request) {
  let body: unknown;

  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ ok: false, error: "invalid_json" }, { status: 400 });
  }

  const parsed = leadSchema.safeParse(body);

  if (!parsed.success) {
    return NextResponse.json(
      { ok: false, error: "invalid_input", issues: parsed.error.flatten().fieldErrors },
      { status: 422 },
    );
  }

  const reference = buildReference();

  // TODO(backend): insertar en D1 en vez de loguear.
  console.info("[lead]", {
    reference,
    receivedAt: new Date().toISOString(),
    ...parsed.data,
  });

  return NextResponse.json({ ok: true, reference }, { status: 201 });
}
