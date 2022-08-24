import { Entypo } from "@expo/vector-icons";
import React, { FC, ReactElement, useRef, useState } from "react";
import { FlatList, Text, TouchableOpacity, Modal, View } from "react-native";
import { styles } from "./styles";

interface CityItem {
  label: string;
  value: string;
}

interface Props {
  label: string;
  data: CityItem[];
  onSelect: (item: { label: string; value: string }) => void;
}

const CityDropdown: FC<Props> = ({ label, data, onSelect }) => {
  const DropdownButton = useRef<TouchableOpacity>(null);
  const [visible, setVisible] = useState(false);
  const [selected, setSelected] = useState<undefined | CityItem>(undefined);
  const [dropdownTop, setDropdownTop] = useState(0);

  const toggleDropdown = (): void => {
    setVisible(prevState => !prevState);
    if (visible) openDropdown();
  };

  const openDropdown = (): void => {
    if (!DropdownButton.current) return;

    DropdownButton.current.measure(
      (
        _fx: number,
        _fy: number,
        _w: number,
        h: number,
        _px: number,
        py: number
      ) => {
        setDropdownTop(py + h);
      }
    );
    setVisible(true);
  };

  const onItemPress = (item: any): void => {
    setSelected(item);
    onSelect(item);
    setVisible(false);
  };

  const renderItem = (props: { item: CityItem }): ReactElement => {
    const { item } = props;
    return (
      <TouchableOpacity style={styles.item} onPress={() => onItemPress(item)}>
        <Text>{item.label}</Text>
      </TouchableOpacity>
    );
  };

  const renderDropdown = (): ReactElement<any, any> => {
    return (
      <Modal visible={visible} transparent animationType="none">
        <TouchableOpacity
          style={styles.overlay}
          onPress={() => setVisible(false)}
        >
          <View style={[styles.dropdown, { top: dropdownTop }]}>
            <FlatList
              data={data}
              renderItem={renderItem}
              keyExtractor={(item, index) => index.toString()}
            />
          </View>
        </TouchableOpacity>
      </Modal>
    );
  };

  return (
    <TouchableOpacity
      ref={DropdownButton}
      style={styles.button}
      onPress={toggleDropdown}
    >
      {renderDropdown()}
      <Text style={styles.buttonText}>
        {(!!selected && selected.label) || label}
      </Text>
      <Entypo style={styles.icon} name="chevron-small-down" />
    </TouchableOpacity>
  );
};

export default CityDropdown;
