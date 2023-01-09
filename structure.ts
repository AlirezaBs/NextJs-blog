import Iframe from "sanity-plugin-iframe-pane";
import type { DefaultDocumentNodeResolver } from "sanity/desk";

export const getDefaultDocumentNode: DefaultDocumentNodeResolver = (S, {schemaType}) => {
    if (schemaType === 'post') {
        return S.document().views([
            S.view.form(),

            S.view.component(Iframe).options({
                // Required: Accepts an async function
                // Or a string
                url: `${
                    process.env.NEXT_PUBLIC_VERCEL_URL || "http:localhost:3000"
                }/api/preview`,
                // Optenal: Set the default Size
                defaultSize: `desktop`,
                // Optional: Add a reload button, or reload on new document revisions
                reload: {
                    button: true,
                },
            }).title("Preview")
        ])
    }
}