import * as Types from '../../../types/gql.types';

import { useQuery, UseQueryOptions } from 'react-query';
import { defaultQueryFunction } from 'api/queryFunction';
export type EpisodeQueryVariables = Types.Exact<{
  id: Types.Scalars['ID'];
}>;


export type EpisodeQuery = { episode?: { id?: string | null | undefined, name?: string | null | undefined, air_date?: string | null | undefined, episode?: string | null | undefined, characters: Array<{ id?: string | null | undefined, name?: string | null | undefined, image?: string | null | undefined, species?: string | null | undefined, origin?: { name?: string | null | undefined, dimension?: string | null | undefined } | null | undefined } | null | undefined> } | null | undefined };


export const EpisodeDocument = `
    query Episode($id: ID!) {
  episode(id: $id) {
    id
    name
    air_date
    episode
    characters {
      id
      name
      image
      species
      origin {
        name
        dimension
      }
    }
  }
}
    `;
export const useEpisodeQuery = <
      TData = EpisodeQuery,
      TError = unknown
    >(
      variables: EpisodeQueryVariables,
      options?: UseQueryOptions<EpisodeQuery, TError, TData>
    ) =>
    useQuery<EpisodeQuery, TError, TData>(
      ['Episode', variables],
      defaultQueryFunction<EpisodeQuery, EpisodeQueryVariables>(EpisodeDocument, variables),
      options
    );

useEpisodeQuery.getKey = (variables: EpisodeQueryVariables) => ['Episode', variables];
;
