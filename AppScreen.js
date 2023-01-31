import React, { useState } from 'react';
import AppPicker from './src/components/AppPicker';
import Screen from './Screen';
function AppScreen(props) {
    const[category, setCategory]=useState()
    return (
        <Screen>
            <AppPicker 
                selectedItem={category} 
                onSelectItem={item => setCategory(item)}
                icon="apps" 
                placeholder="Category"/>
        </Screen>
    );
}

export default AppScreen;