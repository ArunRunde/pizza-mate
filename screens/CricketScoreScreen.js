import React from 'react';
import { StyleSheet, View, Text, ScrollView, TouchableOpacity, Image } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

const CricketScoreScreen = ({ navigation }) => {
  // Sample data - In a real app, this would come from an API
  const matches = [
    {
      id: 1,
      team1: 'India',
      team2: 'Australia',
      score1: '285/4',
      score2: '245/8',
      overs1: '45.2',
      overs2: '42.0',
      status: 'Live',
      venue: 'Melbourne Cricket Ground',
      matchType: 'ODI',
    },
    {
      id: 2,
      team1: 'England',
      team2: 'South Africa',
      score1: '312/6',
      score2: '156/3',
      overs1: '50.0',
      overs2: '28.4',
      status: 'Live',
      venue: 'Lords Cricket Ground',
      matchType: 'T20',
    },
  ];

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Live Matches</Text>
        <TouchableOpacity style={styles.refreshButton}>
          <MaterialIcons name="refresh" size={24} color="#fff" />
        </TouchableOpacity>
      </View>

      {matches.map((match) => (
        <TouchableOpacity
          key={match.id}
          style={styles.matchCard}
          onPress={() => navigation.navigate('MatchDetails', { match })}
        >
          <View style={styles.matchHeader}>
            <Text style={styles.matchType}>{match.matchType}</Text>
            <View style={styles.statusContainer}>
              <View style={styles.liveIndicator} />
              <Text style={styles.status}>{match.status}</Text>
            </View>
          </View>

          <View style={styles.teamsContainer}>
            <View style={styles.teamInfo}>
              <Text style={styles.teamName}>{match.team1}</Text>
              <Text style={styles.score}>{match.score1}</Text>
              <Text style={styles.overs}>({match.overs1} ov)</Text>
            </View>

            <View style={styles.vsContainer}>
              <Text style={styles.vs}>VS</Text>
            </View>

            <View style={styles.teamInfo}>
              <Text style={styles.teamName}>{match.team2}</Text>
              <Text style={styles.score}>{match.score2}</Text>
              <Text style={styles.overs}>({match.overs2} ov)</Text>
            </View>
          </View>

          <View style={styles.venueContainer}>
            <MaterialIcons name="location-on" size={16} color="#666" />
            <Text style={styles.venue}>{match.venue}</Text>
          </View>
        </TouchableOpacity>
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 16,
    backgroundColor: '#1a237e',
  },
  headerTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff',
  },
  refreshButton: {
    padding: 8,
  },
  matchCard: {
    backgroundColor: '#fff',
    margin: 12,
    borderRadius: 12,
    padding: 16,
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  matchHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 12,
  },
  matchType: {
    fontSize: 14,
    color: '#666',
    fontWeight: '500',
  },
  statusContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  liveIndicator: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: '#ff4444',
    marginRight: 6,
  },
  status: {
    color: '#ff4444',
    fontWeight: 'bold',
  },
  teamsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 12,
  },
  teamInfo: {
    flex: 1,
    alignItems: 'center',
  },
  teamName: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 4,
  },
  score: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#1a237e',
  },
  overs: {
    fontSize: 14,
    color: '#666',
  },
  vsContainer: {
    paddingHorizontal: 12,
  },
  vs: {
    fontSize: 16,
    color: '#666',
    fontWeight: '500',
  },
  venueContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 8,
    paddingTop: 8,
    borderTopWidth: 1,
    borderTopColor: '#eee',
  },
  venue: {
    fontSize: 14,
    color: '#666',
    marginLeft: 4,
  },
});

export default CricketScoreScreen; 