import { Text, View, ScrollView } from "react-native";
import React, { Component } from "react";
import { Card, Title, Paragraph, Menu, Divider } from "react-native-paper";

export class Home extends Component {
  render() {
    return (
      <ScrollView>
        <Card style={{ margin: 5, backgroundColor: "#DEF5E5" }}>
          <Card.Cover source={{ uri: "https://picsum.photos/700" }} />
          <Card.Content>
            <Title>Berita</Title>
            <Paragraph>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book.
            </Paragraph>
            <Menu.Item
              leadingIcon="forward"
              onPress={() => {}}
              title="Read More"
            />
          </Card.Content>
        </Card>
        <Divider />
        <Card style={{ margin: 5, backgroundColor: "#DEF5E5" }}>
          <Card.Cover source={{ uri: "https://picsum.photos/700" }} />
          <Card.Content>
            <Title>Berita</Title>
            <Paragraph>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book.
            </Paragraph>
            <Menu.Item
              leadingIcon="forward"
              onPress={() => {}}
              title="Read More"
            />
          </Card.Content>
        </Card>
      </ScrollView>
    );
  }
}

export default Home;
