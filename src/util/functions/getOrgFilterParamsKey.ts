import { filterTypes, filterSorts, filterDirections } from '../data/filters';

/**
 * This function will mapping organization name and filters to a string.
 * [{org_name}/{type}/{sort}/{direction}]
 */

const getOrgFilterParamsKey = ({
  org,
  type,
  sort,
  direction,
}: {
  org: string;
  type?: string | null;
  sort?: string | null;
  direction?: string | null;
}) => {
  return `${org}/${type || filterTypes[0]}/${sort || filterSorts[0]}/${
    direction || filterDirections[0]
  }`;
};

export default getOrgFilterParamsKey;
