import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  Animated,
  StatusBar,
} from 'react-native';

const MyScrollingComponent = () => {
  const [scrollY] = useState(new Animated.Value(0));
  const HEADER_MAX_HEIGHT = 150; // Set your desired maximum height for the top bar
  const HEADER_MIN_HEIGHT = 60;  // Set your desired minimum height for the top bar
  const HEADER_SCROLL_DISTANCE = HEADER_MAX_HEIGHT - HEADER_MIN_HEIGHT;

  const handleScroll = Animated.event(
    [{ nativeEvent: { contentOffset: { y: scrollY } } }],
    { useNativeDriver: false }
  );

  const headerHeight = scrollY.interpolate({
    inputRange: [0, HEADER_SCROLL_DISTANCE],
    outputRange: [HEADER_MAX_HEIGHT, HEADER_MIN_HEIGHT],
    extrapolate: 'clamp',
  });

  return (
    <View style={{ flex: 1 }}>
      <StatusBar barStyle="dark-content" />
      <Animated.View style={[styles.header, { height: headerHeight }]}>
        {/* Content of your top bar */}
        <Text style={styles.headerText}>Your Top Bar Content</Text>
      </Animated.View>
      <ScrollView
        style={{ flex: 1 }}
        contentContainerStyle={{ paddingTop: HEADER_MAX_HEIGHT }}
        onScroll={handleScroll}
        scrollEventThrottle={16}
      >
        {/* Content of your ScrollView */}
        <Text style={styles.contentText}>
          Your scrollable content goes here...
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium illo corporis ea magnam impedit! Molestias eum accusamus distinctio explicabo aut qui sed, rerum impedit perferendis tempora modi autem, ea reiciendis nulla deleniti aliquam cum! Reiciendis voluptatum omnis nulla assumenda consequatur ut maiores ipsum iusto soluta. Alias assumenda unde laboriosam porro ea provident possimus ducimus sit qui? Ipsam adipisci vitae rem hic inventore laborum quae voluptates est enim totam ut aspernatur fugit aliquam, tempora nihil, voluptate eveniet vero, eaque nisi magnam. Qui rem, velit deserunt itaque hic, sed, blanditiis cum porro repellendus ex doloremque voluptates enim ab. Eius eveniet vitae tenetur ipsam quos minus tempore perferendis id dicta nihil illum laborum, repellat, neque voluptates? Earum animi eaque possimus cum laboriosam sapiente numquam, quaerat odio quam facere. Esse quaerat reprehenderit voluptates nulla quidem distinctio quo beatae consequuntur laudantium debitis tenetur, asperiores recusandae praesentium, pariatur aliquam consectetur, totam optio minus! Delectus eveniet perferendis debitis voluptatem eligendi fugit a alias odio, nostrum iure, quasi minus. Tenetur, blanditiis! Quibusdam, iusto sequi modi exercitationem nobis laboriosam blanditiis asperiores assumenda, aliquid voluptatum eius, placeat fuga in provident hic rerum labore dignissimos doloremque sed porro soluta sunt nam ut. Nobis quos corporis necessitatibus deleniti nisi impedit aliquam obcaecati doloribus ipsam labore iste accusamus ea minima nulla, culpa ut sint accusantium sed tempora facere numquam quam modi cumque recusandae. Nihil minus tempore enim earum! Commodi quibusdam molestias, saepe minima ab tempore voluptatem accusantium in, ea explicabo quaerat impedit temporibus adipisci fuga debitis! Blanditiis alias perspiciatis, earum consequuntur excepturi magni doloribus accusantium officia quaerat praesentium facere cupiditate dolorum necessitatibus sed architecto ex nam non distinctio aspernatur repellat dolorem delectus labore enim doloremque? Quos veritatis architecto harum quod eveniet. Magni nulla cumque odio commodi non, alias doloremque illo reiciendis veniam deleniti repellat iure deserunt, suscipit corrupti ullam. Ab, voluptatibus suscipit. Illum vero cupiditate ab minima repellat deserunt dolorum hic autem commodi laborum voluptatum expedita, ipsam natus necessitatibus sed dolores perferendis error rem laboriosam ducimus! Voluptate quas molestias consequatur assumenda consequuntur, beatae facilis expedita ullam animi ipsam autem a inventore itaque. Laboriosam in illum adipisci recusandae quo nostrum tempore ullam cumque. Id ab architecto, minus quo cupiditate nisi? Obcaecati esse animi sunt? Qui iste beatae optio harum quae placeat dolores quod obcaecati. Alias tempore quam quos unde quaerat facere voluptatem consectetur neque expedita, labore non ex, rerum fuga! Delectus laboriosam esse asperiores molestiae non eaque eos nisi voluptatibus est voluptatum quo exercitationem quisquam veniam, dicta illo nesciunt nostrum consectetur eum deleniti omnis alias praesentium nam vero? Ex adipisci reprehenderit eius nostrum autem nisi maiores, possimus dolorem distinctio praesentium repellendus dolorum neque fuga asperiores odio consectetur sit eum aperiam quas consequuntur sed ducimus odit voluptatibus? Unde officia temporibus quaerat minus obcaecati magni similique quidem dolorem. Fugit eos asperiores sunt ex. Officiis omnis, dolores eum aspernatur qui corrupti sint voluptate iusto odio aperiam ullam iste neque expedita perferendis exercitationem maiores esse voluptatum ex quisquam quae rem fuga assumenda! Officia, dicta eius laboriosam laudantium dolorum hic maiores autem porro! Quam maxime beatae tempore eligendi ducimus.
        </Text>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    backgroundColor: '#f9f9f9',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    zIndex: 3
    // Add other styles as needed
  },
  headerText: {
    fontSize: 20,
    fontWeight: 'bold',
    // Add other styles as needed
  },
  contentText: {
    padding: 20,
    fontSize: 16,
    lineHeight: 24,
    // Add other styles as needed
  },
});

export default MyScrollingComponent;
