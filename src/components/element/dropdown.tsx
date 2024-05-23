import { on } from "next/dist/client/components/react-dev-overlay/pages/bus";
import { Menu, MenuButton, MenuList, MenuItem } from "@chakra-ui/menu";
import { Button } from "@chakra-ui/button";

export const Dropdown = ({ selected, list, onSelect }: Props) => {
  const render = () => {
    return (
      <Menu>
        <MenuButton as={Button}>Selected currency: {selected}</MenuButton>
        <MenuList>
          {list.map((item, i) => (
            <MenuItem
              key={`dd-key${i}`}
              onClick={() => {
                if (onSelect) {
                  onSelect(item);
                }
              }}
            >
              <a>{item}</a>
            </MenuItem>
          ))}
        </MenuList>
      </Menu>
    );
  };
  return render();
};

type Props = StateProps & DispatchProps;

interface StateProps {
  selected?: string;
  list: string[];
}

interface DispatchProps {
  onSelect?: (value: string) => void;
}
