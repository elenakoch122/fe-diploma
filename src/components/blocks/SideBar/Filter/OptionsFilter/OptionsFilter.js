import FilterOption from '../../../../elements/FilterOption/FilterOption';
import { options } from '../../../../../data/filter';

export default function OptionsFilter() {
  return options.map(o => <FilterOption option={o} key={o.id} />);
}