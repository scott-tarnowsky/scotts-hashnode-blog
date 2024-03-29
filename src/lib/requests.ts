import request, { gql } from "graphql-request";
import { env } from "./env";
import {
  PublicationName,
  GetPostsArgs,
  GetPostsResponse,
  SubscribeToNewsletterResponse,
} from "./types";

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

export async function getPosts({ first = 9, pageParam = "" }: GetPostsArgs) {
  const query = gql`
    query getPosts($publicationId: ObjectId!, $first: Int!, $after: String) {
      publication(id: $publicationId) {
        posts(first: $first, after: $after) {
          edges {
            node {
              id
              title
              subtitle
              slug
              content {
                text
              }
              coverImage {
                url
              }
              author {
                name
                profilePicture
              }
            }
            cursor
          }
        }
      }
    }
  `;

  const response = await request<GetPostsResponse>(endpoint, query, {
    publicationId,
    first,
    after: pageParam,
  });

  return response.publication.posts.edges;
}

export async function subscribeToNewsletter(email: string) {
  const mutation = gql`
    mutation subscribeToNewsletter($publicationId: ObjectID!, $email: String!) {
      subscribeToNewsletter(
        input: { email: $email, publicationId: $publicationId }
      ) {
        status
      }
    }
  `;

  const response = await request<SubscribeToNewsletterResponse>(
    endpoint,
    mutation,
    { publicationId, email }
  );

  return response;
}
