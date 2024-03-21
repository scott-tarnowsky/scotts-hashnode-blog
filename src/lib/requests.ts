import request, { gql } from "graphql-request";
import { env } from "./env";
import { PublicationName } from "./types";

const endpoint = env.NEXT_PUBLIC_HASHNODE_ENDPOINT;
const publicationId = env.NEXT_PUBLIC_HASHNODE_PUBLICATION_ID;

export async function getBlogName() {
  const query = gql`
    query getBlogName($publicationId: ObjectId!) {
      publication(id: $publicationId) {
        title
        displayTitle
        favicon
      }
    }
  `;

  const response = await request<PublicationName>(endpoint, query, {
    publicationId,
  });

  return {
    title: response.publication.title,
    displayTitle: response.publication.displayTitle,
    favicon: response.publication.favicon,
  };
}
