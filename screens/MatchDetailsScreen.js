import React from 'react';
import { StyleSheet, View, Text, ScrollView, TouchableOpacity } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

const MatchDetailsScreen = ({ route }) => {
  const { match } = route.params;

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <View style={styles.matchTypeContainer}>
          <Text style={styles.matchType}>{match.matchType}</Text>
          <View style={styles.statusContainer}>
            <View style={styles.liveIndicator} />
            <Text style={styles.status}>{match.status}</Text>
          </View>
        </View>
        <Text style={styles.venue}>{match.venue}</Text>
      </View>

      <View style={styles.scoreCard}>
        <View style={styles.teamScore}>
          <Text style={styles.teamName}>{match.team1}</Text>
          <Text style={styles.score}>{match.score1}</Text>
          <Text style={styles.overs}>({match.overs1} ov)</Text>
        </View>

        <View style={styles.vsContainer}>
          <Text style={styles.vs}>VS</Text>
        </View>

        <View style={styles.teamScore}>
          <Text style={styles.teamName}>{match.team2}</Text>
          <Text style={styles.score}>{match.score2}</Text>
          <Text style={styles.overs}>({match.overs2} ov)</Text>
        </View>
      </View>

      <View style={styles.statsContainer}>
        <View style={styles.statCard}>
          <MaterialIcons name="sports-cricket" size={24} color="#1a237e" />
          <Text style={styles.statTitle}>Current Run Rate</Text>
          <Text style={styles.statValue}>6.2</Text>
        </View>

        <View style={styles.statCard}>
          <MaterialIcons name="timer" size={24} color="#1a237e" />
          <Text style={styles.statTitle}>Required Run Rate</Text>
          <Text style={styles.statValue}>7.8</Text>
        </View>

        <View style={styles.statCard}>
          <MaterialIcons name="trending-up" size={24} color="#1a237e" />
          <Text style={styles.statTitle}>Partnership</Text>
          <Text style={styles.statValue}>45 (32)</Text>
        </View>
      </View>

      <View style={styles.commentarySection}>
        <Text style={styles.sectionTitle}>Live Commentary</Text>
        <View style={styles.commentaryCard}>
          <Text style={styles.commentaryText}>
            45.2: Starc to Kohli, FOUR! Beautiful cover drive! Kohli moves to 98.
          </Text>
          <Text style={styles.commentaryTime}>2 mins ago</Text>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  header: {
    backgroundColor: '#1a237e',
    padding: 16,
  },
  matchTypeContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 8,
  },
  matchType: {
    fontSize: 16,
    color: '#fff',
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
  venue: {
    fontSize: 14,
    color: '#fff',
    opacity: 0.8,
  },
  scoreCard: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#fff',
    margin: 12,
    padding: 16,
    borderRadius: 12,
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  teamScore: {
    flex: 1,
    alignItems: 'center',
  },
  teamName: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 4,
  },
  score: {
    fontSize: 24,
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
  statsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 12,
  },
  statCard: {
    flex: 1,
    backgroundColor: '#fff',
    margin: 4,
    padding: 12,
    borderRadius: 8,
    alignItems: 'center',
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
  },
  statTitle: {
    fontSize: 12,
    color: '#666',
    marginTop: 4,
  },
  statValue: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#1a237e',
    marginTop: 4,
  },
  commentarySection: {
    padding: 12,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 12,
  },
  commentaryCard: {
    backgroundColor: '#fff',
    padding: 12,
    borderRadius: 8,
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
  },
  commentaryText: {
    fontSize: 14,
    color: '#333',
    lineHeight: 20,
  },
  commentaryTime: {
    fontSize: 12,
    color: '#666',
    marginTop: 4,
  },
});

export default MatchDetailsScreen; 