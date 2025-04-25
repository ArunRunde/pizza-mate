import React, { useRef, useState, useEffect } from 'react';
import { View, FlatList, Image, Dimensions, StyleSheet,index } from 'react-native';

const { width } = Dimensions.get('window');
const images = [
  { id: '1', src: require ('../../assets/slider1.jpg')},
  { id: '2', src: require ('../../assets/slider2.jpg')},
  { id: '3', src: require('../../assets/slider3.jpg') },
  
];

export default function ImageCarousel() {
  const [activeIndex, setActiveIndex] = useState(0);
  const flatListRef = useRef(null);

  useEffect(() => {
    const timer = setInterval(() => {
      const nextIndex = (activeIndex + 1) % images.length;
      flatListRef.current.scrollToIndex({ index: nextIndex, animated: true });
      setActiveIndex(nextIndex);
    }, 3000); // Slide every 3 seconds

    return () => clearInterval(timer);
  }, [activeIndex]);

  const onViewableItemsChanged = useRef(({ viewableItems }) => {
    if (viewableItems.length > 0) {
      setActiveIndex(viewableItems[0].index);
    }
  }).current;

  const viewConfig = useRef({ viewAreaCoveragePercentThreshold: 50 }).current;

  return (
    <View style={styles.container}>
      <FlatList
        ref={flatListRef}
        data={images}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <Image source={item.src} style={styles.image} resizeMode="cover" />
        )}
        onViewableItemsChanged={onViewableItemsChanged}
        viewabilityConfig={viewConfig}
        style={{ marginRight: index !== images.length - 1 ? 36 : 0 }}
      />

      <View style={styles.pagination}>
        {images.map((_, index) => (
          <View
            key={index}
            style={[
              styles.dot,
              activeIndex === index ? styles.activeDot : styles.inactiveDot,
            ]}
          />
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 250,
    alignItems: 'center',
    justifyContent: 'center',
    // paddingHorizontal:15,
    
  },
  image: {
    width:330,
    height: 190,
    borderRadius:20,
    marginTop:17,
    justifyContent:'space-between',
    marginLeft:14


  },
  pagination: {
    flexDirection: 'row',
    position: 'absolute',
    bottom: 48,
  },
  dot: {
    width: 7,
    height: 7,
    borderRadius: 5,
    margin: 3,
    
  },
  activeDot: {
    backgroundColor: '#007AFF',
  },
  inactiveDot: {
    backgroundColor: '#aaa',
  },
});
