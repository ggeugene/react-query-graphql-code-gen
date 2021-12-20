import * as Types from '../../../types/gql.types';

import { useQuery, UseQueryOptions } from 'react-query';
import { defaultQueryFunction } from 'api/queryFunction';
export type EpisodesQueryVariables = Types.Exact<{ [key: string]: never; }>;


export type EpisodesQuery = { episodes?: { results?: Array<{ id?: string | null | undefined, name?: string | null | undefined, air_date?: string | null | undefined, episode?: string | null | undefined } | null | undefined> | null | undefined } | null | undefined };


export const EpisodesDocument = `
    query Episodes {
  episodes {
    results {
      id
      name
      air_date
      episode
    }
  }
}
    `;
export const useEpisodesQuery = <
      TData = EpisodesQuery,
      TError = unknown
    >(
      variables?: EpisodesQueryVariables,
      options?: UseQueryOptions<EpisodesQuery, TError, TData>
    ) =>
    useQuery<EpisodesQuery, TError, TData>(
      variables === undefined ? ['Episodes'] : ['Episodes', variables],
      defaultQueryFunction<EpisodesQuery, EpisodesQueryVariables>(EpisodesDocument, variables),
      options
    );

useEpisodesQuery.getKey = (variables?: EpisodesQueryVariables) => variables === undefined ? ['Episodes'] : ['Episodes', variables];
;
