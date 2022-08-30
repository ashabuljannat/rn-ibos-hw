import React from 'react';
import {
  Image,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import FIcon from 'react-native-vector-icons/Feather';
import FAIcon from 'react-native-vector-icons/FontAwesome5';
import MIcon from 'react-native-vector-icons/MaterialIcons';
import IoIcon from 'react-native-vector-icons/Ionicons';
import {NativeBaseProvider, Select, CheckIcon, Input} from 'native-base';

const App = () => {
  return (
    <NativeBaseProvider>
      <SafeAreaView>
        <StatusBar />
        <ScrollView contentInsetAdjustmentBehavior="automatic">
          <View style={styles.header}>
            <View style={{display: 'flex', flexDirection: 'row'}}>
              <FIcon
                name="menu"
                size={25}
                color="#fff"
                style={{marginHorizontal: 15}}
              />
              <Text style={styles.hText}>Employee Profile</Text>
            </View>
          </View>

          <View style={styles.id}>
            <Image
              source={require('./images/pro.png')}
              style={{marginHorizontal: 15}}
            />
            <View>
              <Text style={styles.name}>Darlene Robertson</Text>
              <Text style={styles.roll}>Senior UX Designer</Text>
              <Text style={styles.idId}>ID43178</Text>
            </View>
            <Text style={styles.active}>Active</Text>
          </View>
          <View style={styles.data}>
            <FAIcon
              name="shopping-bag"
              size={25}
              color="#000"
              style={{marginLeft: 15, marginRight: 25}}
            />
            <View>
              <Text style={{fontWeight: '600', fontSize: 18}}>
                Human Resource
              </Text>
              <Text style={{fontWeight: '400', fontSize: 15}}>Department</Text>
            </View>
          </View>
          <View style={styles.data}>
            <MIcon
              name="cake"
              size={25}
              color="#000"
              style={{marginLeft: 15, marginRight: 25}}
            />
            <View>
              <Text style={{fontWeight: '600', fontSize: 18}}>
                28 September, 1990
              </Text>
              <Text style={{fontWeight: '400', fontSize: 15}}>
                Date of Birth
              </Text>
            </View>
          </View>
          <View style={styles.data}>
            <IoIcon
              name="woman"
              size={25}
              color="#000"
              style={{marginLeft: 15, marginRight: 25}}
            />
            <View
              style={{
                paddingRight: 25,
                borderRightColor: '#f2f2f7',
                borderRightWidth: 1,
              }}>
              <Text style={{fontWeight: '600', fontSize: 18}}>Female</Text>
              <Text style={{fontWeight: '400', fontSize: 15}}>Gender</Text>
            </View>
            <View
              style={{
                paddingLeft: 25,
              }}>
              <Text style={{fontWeight: '600', fontSize: 18}}>Islam</Text>
              <Text style={{fontWeight: '400', fontSize: 15}}>Religion</Text>
            </View>
          </View>

          <View style={styles.emplo}>
            <Text style={{fontWeight: '600', fontSize: 23}}>
              Employee Application
            </Text>
            <View style={{display: 'flex', flexDirection: 'row'}}>
              <View style={styles.emCard}>
                <Image
                  source={require('./images/bag.png')}
                  style={{height: 65, width: 63}}
                />
                <Text style={{fontWeight: '500', fontSize: 17, marginTop: 7}}>
                  Leave
                </Text>
              </View>
              <View style={styles.emCard}>
                <Image
                  source={require('./images/mov.png')}
                  style={{height: 65, width: 63}}
                />
                <Text style={{fontWeight: '500', fontSize: 17, marginTop: 7}}>
                  Movement
                </Text>
              </View>
              <View style={styles.emCard}>
                <Image
                  source={require('./images/map.png')}
                  style={{height: 65, width: 63}}
                />
                <Text style={{fontWeight: '500', fontSize: 17, marginTop: 7}}>
                  {`Remote \nAttendance `}
                </Text>
              </View>
              <View style={styles.emCard}>
                <Image
                  source={require('./images/card.png')}
                  style={{height: 65, width: 63}}
                />
                <Text style={{fontWeight: '500', fontSize: 17, marginTop: 7}}>
                  IOU
                </Text>
              </View>
            </View>
            <View style={{display: 'flex', flexDirection: 'row'}}>
              <View style={styles.emCard}>
                <Image
                  source={require('./images/coupon.png')}
                  style={{height: 65, width: 63}}
                />
                <Text style={{fontWeight: '500', fontSize: 17, marginTop: 7}}>
                  Loan
                </Text>
              </View>
              <View style={styles.emCard}>
                <Image
                  source={require('./images/teli.png')}
                  style={{height: 65, width: 63}}
                />
                <Text style={{fontWeight: '500', fontSize: 17, marginTop: 7}}>
                  Overtime
                </Text>
              </View>
            </View>
          </View>

          <View style={styles.input}>
            <Text style={{fontWeight: '600', fontSize: 23}}>
              Please input your information
            </Text>
            <View style={styles.form}>
              <Select
                variant="underlined"
                minWidth="200"
                accessibilityLabel="Choose Service"
                placeholder="Leave type"
                _selectedItem={{
                  bg: 'teal.600',
                  endIcon: <CheckIcon size="5" />,
                }}
                my={3}>
                <Select.Item label="UX Research" value="ux" />
                <Select.Item label="Web Development" value="web" />
                <Select.Item label="Cross Platform Development" value="cross" />
                <Select.Item label="UI Designing" value="ui" />
                <Select.Item label="Backend Development" value="backend" />
              </Select>
              <View
                style={{display: 'flex', flexDirection: 'row'}}
                mb={4}
                mt={4}>
                <Input
                  variant="underlined"
                  w="45%"
                  mr={8}
                  InputRightElement={
                    <FAIcon name="calendar-day" size={20} color="#000" />
                  }
                  placeholder="From Date"
                />
                <Input
                  variant="underlined"
                  w="45%"
                  InputRightElement={
                    <FAIcon name="calendar-day" size={20} color="#000" />
                  }
                  placeholder="To Date"
                />
              </View>
              <Input variant="underlined" placeholder="Location" my={4} />
              <Input variant="underlined" placeholder="Reason" />
              <Input
                variant="unstyled"
                mt={5}
                InputLeftElement={
                  <MIcon name="file-upload" size={25} color="#299647" />
                }
                placeholder="File Upload"
              />
            </View>

            <Text style={styles.btn}>Apply</Text>
          </View>
        </ScrollView>
      </SafeAreaView>
    </NativeBaseProvider>
  );
};

const styles = StyleSheet.create({
  header: {
    backgroundColor: '#208d3f',
    height: 66,
    display: 'flex',
    justifyContent: 'center',
  },
  hText: {
    fontSize: 25,
    fontWeight: '600',
    color: '#fff',
  },
  id: {
    backgroundColor: '#fff',
    height: 126,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  name: {
    fontSize: 22,
    fontWeight: '600',
    lineHeight: 30,
  },
  roll: {
    fontSize: 17,
    fontWeight: '400',
    lineHeight: 25,
  },
  idId: {
    fontSize: 17,
    fontWeight: '400',
    lineHeight: 25,
  },
  active: {
    width: 60,
    height: 20,
    fontWeight: '500',
    backgroundColor: '#E6F9E9',
    borderRadius: 99,
    paddingHorizontal: 8,
    position: 'relative',
    top: 30,
    left: 40,
    color: '#299647',
  },
  data: {
    display: 'flex',
    flexDirection: 'row',
    borderTopColor: '#f2f2f7',
    borderTopWidth: 1,
    padding: 10,
    backgroundColor: '#fff',
  },
  emplo: {
    borderTopColor: '#f2f2f7',
    borderTopWidth: 15,
    padding: 10,
  },
  emCard: {
    height: 90,
    width: 85,
    display: 'flex',
    alignItems: 'center',
    marginVertical: 15,
    marginHorizontal: 7,
  },
  input: {
    borderTopColor: '#f2f2f7',
    borderTopWidth: 15,
    padding: 20,
  },
  form: {
    height: 370,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3,
    elevation: 3,
    marginVertical: 20,
    // backgroundColor: '#bbffce',
    paddingHorizontal: 15,
    paddingVertical: 10,
  },
  btn: {
    width: 90,
    height: 40,
    fontWeight: '500',
    backgroundColor: '#299647',
    borderRadius: 99,
    paddingHorizontal: 25,
    paddingVertical: 10,
    left: '40%',
    color: '#fff',
  },
});

export default App;
