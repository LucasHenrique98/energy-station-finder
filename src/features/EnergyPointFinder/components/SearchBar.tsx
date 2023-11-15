import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import React, { useRef, useState } from 'react';
import { styles } from './stylesheet';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faSearch, faXmark } from '@fortawesome/free-solid-svg-icons';
import { useTranslation } from 'react-i18next';

export default function SearchBar() {
  const [isFocused, setIsFocused] = useState(false);
  const [searchText, setSearchText] = useState('');
  const { t } = useTranslation();

  const textInputRef = useRef<TextInput>(null);

  const handlePlaceholderViewTextPress = () => {
    setIsFocused(true);
    if (textInputRef.current) textInputRef.current.focus();
  };

  const handleCloseIconPress = () => {
    if (textInputRef.current) textInputRef.current.blur();
    setIsFocused(false);
  };

  return (
    <View style={styles.container}>
      <FontAwesomeIcon style={styles.searchIcon} icon={faSearch} />
      {isFocused ? (
        <>
          <TextInput
            ref={textInputRef}
            value={searchText}
            placeholderTextColor={'#d3d3d8'}
            onChangeText={text => setSearchText(text)}
            style={[styles.textInput, styles.commonTextInputStyle]}
            placeholder={t('searchCategories')}
          />
          <TouchableOpacity
            style={styles.closeIcon}
            onPress={handleCloseIconPress}>
            <FontAwesomeIcon icon={faXmark} />
          </TouchableOpacity>
        </>
      ) : (
        <View>
          <Text
            onPress={handlePlaceholderViewTextPress}
            style={styles.commonTextInputStyle}>
            {t('search')}
          </Text>
        </View>
      )}
    </View>
  );
}
