import React, { useMemo, useState } from 'react';
import {
  StyleSheet,
  View,
  Text,
  ScrollView,
  Pressable,
  Dimensions,
  TextInput,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
import { COLORS, SPACING, TYPOGRAPHY, SHADOWS } from '../theme';
import GlassCard from '../components/GlassCard';
import { getDailyVerse } from '../data/daily';
import { search, SearchResult } from '../data/search';
import { useLibrary } from '../store/library';
import { useSearchHistory } from '../store/searchHistory';

const { width: SCREEN_WIDTH } = Dimensions.get('window');

export default function HomeScreen() {
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const daily = useMemo(() => getDailyVerse(), []);
  const lastRead = useLibrary((s) => s.lastRead);
  const recordRead = useLibrary((s) => s.recordRead);
  const recentSearches = useSearchHistory((s) => s.recents);
  const addSearch = useSearchHistory((s) => s.add);
  const searchResults = useMemo(
    () => (searchQuery.trim().length > 1 ? search(searchQuery, { limit: 4 }) : []),
    [searchQuery],
  );

  const submitSearch = () => {
    addSearch(searchQuery);
  };

  const selectSearchResult = (result: SearchResult) => {
    addSearch(searchQuery);
    recordRead(result.book, result.chapter);
    setSearchOpen(false);
    setSearchQuery('');
  };

  return (
    <View style={styles.container}>
      {/* 1. Glass Header */}
      <View style={styles.headerWrapper}>
        <View style={styles.headerGlow} />
        <GlassCard
          radius={0}
          intensity={95}
          fillColor="rgba(12, 10, 28, 0.20)"
          hazeColor="rgba(255, 255, 255, 0.055)"
          style={styles.headerCard}
        >
          <SafeAreaView edges={['top']}>
            <View style={styles.headerContent}>
              <View style={styles.headerSpacer} />
              
              <Text style={styles.headerTitle}>Mini Bible</Text>
              
              <Pressable style={styles.searchButton} onPress={() => setSearchOpen((open) => !open)}>
                <MaterialCommunityIcons name={searchOpen ? 'close' : 'magnify'} size={22} color={COLORS.goldMedium} />
              </Pressable>
            </View>
          </SafeAreaView>
        </GlassCard>
        <View style={styles.headerDivider} />
        {searchOpen && (
          <GlassCard
            radius={0}
            intensity={82}
            fillColor="rgba(8, 5, 20, 0.74)"
            hazeColor="rgba(255, 255, 255, 0.018)"
            style={styles.searchPanel}
          >
            <View style={styles.searchPanelContent}>
              <View style={styles.searchInputRow}>
                <MaterialCommunityIcons name="magnify" size={18} color={COLORS.goldMedium} />
                <TextInput
                  value={searchQuery}
                  onChangeText={setSearchQuery}
                  onSubmitEditing={submitSearch}
                  placeholder="Search scripture, plans, or tools..."
                  placeholderTextColor="rgba(244, 238, 223, 0.42)"
                  returnKeyType="search"
                  autoCapitalize="none"
                  autoCorrect={false}
                  autoFocus
                  style={styles.searchInput}
                />
                {searchQuery.length > 0 && (
                  <Pressable onPress={() => setSearchQuery('')} style={styles.clearSearchButton}>
                    <MaterialCommunityIcons name="close-circle" size={18} color="rgba(244, 238, 223, 0.46)" />
                  </Pressable>
                )}
              </View>

              {searchQuery.trim().length > 1 ? (
                <View style={styles.searchResults}>
                  {searchResults.length > 0 ? (
                    searchResults.map((result) => (
                      <Pressable key={result.id} style={styles.searchResultRow} onPress={() => selectSearchResult(result)}>
                        <Text style={styles.searchResultRef}>{result.book} {result.chapter}:{result.verse}</Text>
                        <Text style={styles.searchResultText} numberOfLines={2}>{result.text}</Text>
                      </Pressable>
                    ))
                  ) : (
                    <Text style={styles.searchEmpty}>No matches found</Text>
                  )}
                </View>
              ) : recentSearches.length > 0 ? (
                <View style={styles.recentSearches}>
                  {recentSearches.slice(0, 3).map((recent) => (
                    <Pressable key={recent} style={styles.recentSearchChip} onPress={() => setSearchQuery(recent)}>
                      <Text style={styles.recentSearchText}>{recent}</Text>
                    </Pressable>
                  ))}
                </View>
              ) : null}
            </View>
          </GlassCard>
        )}
      </View>

      {/* Main Content Area */}
      <ScrollView
        style={styles.scrollView}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={[styles.scrollContent, searchOpen && styles.scrollContentSearchOpen]}
      >
        {/* 2. Daily Scripture Hero Card */}
        <View style={styles.heroWrapper}>
          <View pointerEvents="none" style={styles.heroAmbientGlow} />
          <GlassCard
            radius={22}
            style={styles.heroCard}
            intensity={76}
            fillColor="rgba(10, 8, 24, 0.58)"
            hazeColor="rgba(255, 255, 255, 0.025)"
          >
            <View style={styles.heroContent}>
              <Text style={styles.heroLabel}>Daily Scripture</Text>
              
              {/* Scripture content floats on the outer frosted surface. */}
              <View style={styles.innerScripturePanel}>
                <Text style={styles.heroText}>
                  "{daily.text}"
                </Text>
                <Text style={styles.heroReference}>({daily.ref})</Text>
              </View>
            </View>
          </GlassCard>
        </View>

        {/* 3. Continue Reading Section */}
        <Text style={styles.sectionHeader}>Continue Reading</Text>
        <View style={[styles.sectionWrapper, { zIndex: 10 }]}>
          <View style={styles.heroGlowWrapper}>
            <View pointerEvents="none" style={styles.readingOuterAura} />
            <View pointerEvents="none" style={styles.readingRimGlow} />
            <View pointerEvents="none" style={styles.readingWarmLift} />
            <GlassCard
              radius={18}
              borderStyle="gold"
              style={styles.readingCard}
              intensity={70}
              fillColor="rgba(12, 10, 28, 0.68)"
              hazeColor="rgba(255, 255, 255, 0.018)"
            >
              <View style={styles.readingContent}>
                <View style={styles.readingTextSection}>
                  <Text style={styles.readingBook}>{lastRead ? `${lastRead.book} ${lastRead.chapter}` : 'Psalm 23'}</Text>
                  <Text style={styles.readingChapter}>{lastRead ? 'Pick up where you left off' : 'The Lord is my Shepherd'}</Text>
                </View>
                <View style={styles.bookmarkWrapper}>
                  <MaterialCommunityIcons name="bookmark" size={30} color={COLORS.goldMedium} style={styles.bookmarkIcon} />
                </View>
              </View>
              
              {/* Reading Progress Indicator */}
              <View style={styles.progressSection}>
                <View style={styles.progressTrack}>
                  <LinearGradient
                    colors={[COLORS.goldMedium, COLORS.goldLight]}
                    start={{ x: 0, y: 0 }}
                    end={{ x: 1, y: 0 }}
                    style={styles.progressBar}
                  />
                </View>
                <Text style={styles.progressPercent}>(65%)</Text>
              </View>
            </GlassCard>
          </View>
        </View>

        {/* 4. Explore Categories Section */}
        <Text style={[styles.sectionHeader, styles.sectionHeaderLarge]}>Explore Categories</Text>
        <View style={[styles.categoryGrid, styles.sectionWrapper]}>
          <View style={styles.gridRow}>
            {/* Category Card: Read the Bible */}
            <Pressable style={styles.categoryCardWrapper}>
              <GlassCard radius={16} style={styles.categoryCard} intensity={68}>
                <View style={styles.categoryContent}>
                  <View style={styles.categoryIconWell}>
                    <MaterialCommunityIcons name="cross" size={25} color={COLORS.goldLight} style={styles.categoryIcon} />
                  </View>
                  <View style={styles.categoryTextWrapper}>
                    <Text style={styles.categoryTitle}>Read the Bible</Text>
                    <Text style={styles.categorySub1}>Genesis 1</Text>
                    <Text style={styles.categorySub2}>Old Testament</Text>
                  </View>
                </View>
              </GlassCard>
            </Pressable>

            {/* Category Card: Devotionals */}
            <Pressable style={styles.categoryCardWrapper}>
              <GlassCard radius={16} style={styles.categoryCard} intensity={68}>
                <View style={styles.categoryContent}>
                  <View style={styles.categoryIconWell}>
                    <MaterialCommunityIcons name="book-cross" size={25} color={COLORS.goldLight} style={styles.categoryIcon} />
                  </View>
                  <View style={styles.categoryTextWrapper}>
                    <Text style={styles.categoryTitle}>Devotionals</Text>
                    <Text style={styles.categorySub1}>Grace & Faith</Text>
                  </View>
                </View>
              </GlassCard>
            </Pressable>
          </View>

          <View style={styles.gridRow}>
            {/* Category Card: Study Tools */}
            <Pressable style={styles.categoryCardWrapper}>
              <GlassCard radius={16} style={styles.categoryCard} intensity={68}>
                <View style={styles.categoryContent}>
                  <View style={styles.categoryIconWell}>
                    <MaterialCommunityIcons name="lightbulb-on-outline" size={25} color={COLORS.goldLight} style={styles.categoryIcon} />
                  </View>
                  <View style={styles.categoryTextWrapper}>
                    <Text style={styles.categoryTitle}>Study Tools</Text>
                    <Text style={styles.categorySub1}>Commentaries</Text>
                    <Text style={styles.categorySub2}>Concordance</Text>
                  </View>
                </View>
              </GlassCard>
            </Pressable>

            {/* Category Card: Audio Bible */}
            <Pressable style={styles.categoryCardWrapper}>
              <GlassCard radius={16} style={styles.categoryCard} intensity={68}>
                <View style={styles.categoryContent}>
                  <View style={styles.categoryIconWell}>
                    <MaterialCommunityIcons name="headphones" size={25} color={COLORS.goldLight} style={styles.categoryIcon} />
                  </View>
                  <View style={styles.categoryTextWrapper}>
                    <Text style={styles.categoryTitle}>Audio Bible</Text>
                  </View>
                </View>
              </GlassCard>
            </Pressable>
          </View>
        </View>
      </ScrollView>

      {/* 5. Premium Bottom Navigation */}
      <View style={styles.navWrapper}>
        <LinearGradient
          colors={['transparent', 'rgba(230, 201, 120, 0.42)', 'transparent']}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 0 }}
          style={styles.navDivider}
        />
        <GlassCard radius={0} intensity={85} style={styles.navBar}>
          <SafeAreaView edges={['bottom']} style={styles.navSafeArea}>
            <View style={styles.tabItemActive}>
              <View style={styles.tabGlow} />
              <MaterialCommunityIcons name="cross" size={24} color={COLORS.goldLight} style={styles.activeIconGlow} />
              <Text style={styles.tabLabelActive}>Home</Text>
            </View>

            <View style={styles.tabItem}>
              <MaterialCommunityIcons name="book-open-page-variant-outline" size={24} color="rgba(255,255,255,0.55)" />
              <Text style={styles.tabLabel}>Bible</Text>
            </View>

            <View style={styles.tabItem}>
              <MaterialCommunityIcons name="lightbulb-on-outline" size={24} color="rgba(255,255,255,0.55)" />
              <Text style={styles.tabLabel}>Study</Text>
            </View>

            <View style={styles.tabItem}>
              <MaterialCommunityIcons name="account-outline" size={24} color="rgba(255,255,255,0.55)" />
              <Text style={styles.tabLabel}>Profile</Text>
            </View>
          </SafeAreaView>
        </GlassCard>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.transparent,
    overflow: 'hidden',
  },
  scrollView: {
    flex: 1,
  },
  headerWrapper: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    zIndex: 100,
  },
  headerCard: {
    borderWidth: 0,
    borderBottomWidth: 0,
    backgroundColor: 'rgba(14, 10, 35, 0.26)',
  },
  headerContent: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: SPACING.lg,
    paddingVertical: SPACING.md + 4,
  },
  headerSpacer: {
    width: 40,
  },
  headerTitle: {
    fontFamily: TYPOGRAPHY.serif,
    fontSize: TYPOGRAPHY.sizes.xl,
    color: COLORS.goldLight,
    letterSpacing: TYPOGRAPHY.letterSpacing.widest,
    fontWeight: '300',
    textAlign: 'center',
    ...SHADOWS.textBloom,
  },
  searchButton: {
    width: 38,
    height: 38,
    borderRadius: 19,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(230, 201, 120, 0.10)',
    borderWidth: 1,
    borderColor: 'rgba(230, 201, 120, 0.30)',
    ...SHADOWS.goldBloom,
  },
  headerGlow: {
    position: 'absolute',
    top: -50,
    left: '10%',
    right: '10%',
    height: 100,
    borderRadius: 50,
    backgroundColor: 'rgba(255, 233, 160, 0.04)',
    shadowColor: COLORS.goldLight,
    shadowOpacity: 0.5,
    shadowRadius: 50,
    elevation: 10,
    zIndex: -1,
  },
  headerDivider: {
    height: 1,
    backgroundColor: 'rgba(255, 255, 255, 0.10)',
  },
  searchPanel: {
    borderWidth: 0,
    borderBottomWidth: 1,
    borderBottomColor: 'rgba(230, 201, 120, 0.12)',
    backgroundColor: 'rgba(8, 5, 20, 0.64)',
  },
  searchPanelContent: {
    paddingHorizontal: SPACING.lg,
    paddingTop: SPACING.sm,
    paddingBottom: SPACING.md,
    gap: SPACING.sm,
  },
  searchInputRow: {
    minHeight: 42,
    borderRadius: 14,
    borderWidth: 1,
    borderColor: 'rgba(230, 201, 120, 0.22)',
    backgroundColor: 'rgba(255, 255, 255, 0.045)',
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: SPACING.sm,
  },
  searchInput: {
    flex: 1,
    minHeight: 40,
    paddingHorizontal: SPACING.sm,
    paddingVertical: 0,
    color: COLORS.ivory,
    fontFamily: TYPOGRAPHY.sans,
    fontSize: TYPOGRAPHY.sizes.sm,
  },
  clearSearchButton: {
    width: 28,
    height: 28,
    alignItems: 'center',
    justifyContent: 'center',
  },
  searchResults: {
    gap: SPACING.xs,
  },
  searchResultRow: {
    minHeight: 54,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: 'rgba(255, 255, 255, 0.055)',
    backgroundColor: 'rgba(4, 3, 12, 0.38)',
    paddingHorizontal: SPACING.sm,
    paddingVertical: SPACING.xs,
  },
  searchResultRef: {
    color: COLORS.goldMedium,
    fontFamily: TYPOGRAPHY.serif,
    fontSize: TYPOGRAPHY.sizes.xs,
    marginBottom: 2,
  },
  searchResultText: {
    color: 'rgba(244, 238, 223, 0.78)',
    fontFamily: TYPOGRAPHY.sans,
    fontSize: TYPOGRAPHY.sizes.xs,
    lineHeight: 17,
  },
  searchEmpty: {
    color: COLORS.mutedBeige,
    fontFamily: TYPOGRAPHY.sans,
    fontSize: TYPOGRAPHY.sizes.sm,
    paddingVertical: SPACING.xs,
  },
  recentSearches: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: SPACING.xs,
  },
  recentSearchChip: {
    borderRadius: 999,
    borderWidth: 1,
    borderColor: 'rgba(230, 201, 120, 0.18)',
    backgroundColor: 'rgba(230, 201, 120, 0.07)',
    paddingHorizontal: SPACING.sm,
    paddingVertical: 5,
  },
  recentSearchText: {
    color: COLORS.goldLight,
    fontFamily: TYPOGRAPHY.sans,
    fontSize: TYPOGRAPHY.sizes.xs,
  },
  scrollContent: {
    paddingHorizontal: SPACING.lg,
    paddingTop: 80,
    paddingBottom: 100,
  },
  scrollContentSearchOpen: {
    paddingTop: 190,
  },
  heroWrapper: {
    ...SHADOWS.cardFloat,
    marginBottom: SPACING.xs,
    borderRadius: 22,
    position: 'relative',
  },
  heroAmbientGlow: {
    position: 'absolute',
    top: -14,
    right: 8,
    bottom: -10,
    left: 8,
    borderRadius: 28,
    backgroundColor: 'rgba(120, 46, 255, 0.08)',
    shadowColor: COLORS.amethyst,
    shadowOpacity: 0.28,
    shadowRadius: 34,
    shadowOffset: { width: 0, height: 0 },
    elevation: 8,
  },
  heroCard: {
    minHeight: 318,
    paddingHorizontal: SPACING.lg,
    paddingVertical: SPACING.xl,
  },
  heroContent: {
    flex: 1,
    paddingHorizontal: SPACING.xs,
    alignItems: 'center',
  },
  innerScripturePanel: {
    flex: 1,
    backgroundColor: COLORS.transparent,
    paddingHorizontal: SPACING.lg,
    paddingTop: SPACING.xl,
    paddingBottom: SPACING.md,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  heroLabel: {
    fontFamily: TYPOGRAPHY.serif,
    fontSize: TYPOGRAPHY.sizes.xl,
    color: COLORS.goldLight,
    letterSpacing: TYPOGRAPHY.letterSpacing.wide,
    marginBottom: SPACING.sm,
    fontWeight: '300',
    ...SHADOWS.textBloom,
  },
  heroText: {
    fontFamily: TYPOGRAPHY.serif,
    fontSize: 23,
    color: COLORS.ivory,
    lineHeight: 36,
    textAlign: 'center',
    marginBottom: SPACING.lg,
    fontWeight: '300',
  },
  heroReference: {
    fontFamily: TYPOGRAPHY.serif,
    fontSize: TYPOGRAPHY.sizes.sm,
    color: COLORS.goldMedium,
    fontStyle: 'italic',
  },
  sectionHeader: {
    fontFamily: TYPOGRAPHY.serif,
    fontSize: TYPOGRAPHY.sizes.lg,
    color: COLORS.ivory,
    marginTop: SPACING.xs,
    marginBottom: SPACING.xs,
    letterSpacing: TYPOGRAPHY.letterSpacing.normal,
    fontWeight: '300',
  },
  sectionHeaderLarge: {
    fontSize: TYPOGRAPHY.sizes.xl,
    marginTop: SPACING.md,
    marginBottom: SPACING.sm,
  },
  sectionWrapper: {
    position: 'relative',
    zIndex: 0,
  },
  heroGlowWrapper: {
    ...SHADOWS.heroGlow,
    borderRadius: 18,
    position: 'relative',
  },
  readingCard: {
    position: 'relative',
    zIndex: 2,
  },
  readingOuterAura: {
    position: 'absolute',
    top: -8,
    right: -8,
    bottom: -8,
    left: -8,
    borderRadius: 24,
    borderWidth: 1,
    borderColor: 'rgba(255, 229, 153, 0.14)',
    backgroundColor: 'rgba(255, 229, 153, 0.012)',
    shadowColor: COLORS.goldLight,
    shadowOpacity: 0.34,
    shadowRadius: 28,
    shadowOffset: { width: 0, height: 0 },
    elevation: 16,
    zIndex: 0,
  },
  readingRimGlow: {
    position: 'absolute',
    top: -2,
    right: -2,
    bottom: -2,
    left: -2,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: 'rgba(255, 233, 160, 0.26)',
    backgroundColor: 'rgba(255, 233, 160, 0.008)',
    shadowColor: COLORS.goldMedium,
    shadowOpacity: 0.42,
    shadowRadius: 14,
    shadowOffset: { width: 0, height: 0 },
    elevation: 18,
    zIndex: 1,
  },
  readingWarmLift: {
    position: 'absolute',
    right: -20,
    bottom: -16,
    width: 140,
    height: 58,
    borderRadius: 70,
    backgroundColor: 'rgba(150, 28, 60, 0.08)',
    shadowColor: COLORS.ruby,
    shadowOpacity: 0.28,
    shadowRadius: 24,
    shadowOffset: { width: 0, height: 0 },
    elevation: 8,
    zIndex: 0,
  },
  readingContent: {
    paddingTop: SPACING.sm,
    paddingHorizontal: SPACING.md,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  readingTextSection: {
    flex: 1,
  },
  readingBook: {
    fontFamily: TYPOGRAPHY.serif,
    fontSize: TYPOGRAPHY.sizes.xl,
    color: COLORS.ivory,
    marginBottom: 3,
    fontWeight: '300',
  },
  readingChapter: {
    fontFamily: TYPOGRAPHY.sans,
    fontSize: TYPOGRAPHY.sizes.sm,
    color: COLORS.mutedBeige,
  },
  bookmarkWrapper: {
    marginLeft: SPACING.md,
  },
  bookmarkIcon: {
    ...SHADOWS.goldBloom,
  },
  progressSection: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: SPACING.md,
    paddingBottom: SPACING.sm,
    marginTop: SPACING.sm,
  },
  progressTrack: {
    flex: 1,
    height: 4,
    backgroundColor: 'rgba(0, 0, 0, 0.46)',
    borderRadius: 2,
    marginRight: SPACING.sm,
    overflow: 'hidden',
  },
  progressBar: {
    width: '65%',
    height: '100%',
    backgroundColor: COLORS.goldMedium,
    borderRadius: 2,
    ...SHADOWS.goldBloom,
  },
  progressPercent: {
    fontFamily: TYPOGRAPHY.sans,
    fontSize: TYPOGRAPHY.sizes.xs,
    color: COLORS.mutedBeige,
  },
  categoryGrid: {
    marginTop: SPACING.xs,
    gap: SPACING.sm,
    ...SHADOWS.categoryAmbientGlow,
  },
  gridRow: {
    flexDirection: 'row',
    gap: SPACING.sm,
  },
  categoryCardWrapper: {
    flex: 1,
    ...SHADOWS.cardHover,
  },
  categoryCard: {
  },
  categoryContent: {
    padding: 14,
    flexDirection: 'row',
    alignItems: 'flex-start',
    minHeight: 96,
  },
  categoryIconWell: {
    width: 35,
    height: 35,
    borderRadius: 10,
    marginRight: 10,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(230, 201, 120, 0.10)',
    borderWidth: 1,
    borderColor: 'rgba(230, 201, 120, 0.16)',
    ...SHADOWS.iconGlow,
  },
  categoryIcon: {
    ...SHADOWS.iconGlow,
  },
  categoryTextWrapper: {
    flex: 1,
  },
  categoryTitle: {
    fontFamily: TYPOGRAPHY.sans,
    fontSize: TYPOGRAPHY.sizes.sm,
    fontWeight: '600',
    color: COLORS.ivory,
    marginBottom: 3,
  },
  categorySub1: {
    fontFamily: TYPOGRAPHY.sans,
    fontSize: TYPOGRAPHY.sizes.xs,
    color: COLORS.goldMedium,
    marginBottom: 2,
  },
  categorySub2: {
    fontFamily: TYPOGRAPHY.sans,
    fontSize: TYPOGRAPHY.sizes.xs,
    color: COLORS.mutedBeige,
  },
  navWrapper: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    zIndex: 100,
  },
  navDivider: {
    height: 1,
    backgroundColor: 'rgba(255, 255, 255, 0.08)',
  },
  navBar: {
    borderWidth: 0,
    backgroundColor: 'rgba(6, 5, 18, 0.88)',
  },
  navSafeArea: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    height: 65,
    paddingHorizontal: SPACING.sm,
  },
  tabItem: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
  },
  tabItemActive: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
    position: 'relative',
  },
  tabGlow: {
    position: 'absolute',
    top: -12,
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: 'rgba(230, 201, 120, 0.08)',
    ...SHADOWS.goldBloom,
  },
  activeIconGlow: {
    ...SHADOWS.goldBloom,
  },
  tabLabel: {
    fontFamily: TYPOGRAPHY.sans,
    fontSize: TYPOGRAPHY.sizes.xs - 1,
    color: 'rgba(255,255,255,0.45)',
    marginTop: 4,
  },
  tabLabelActive: {
    fontFamily: TYPOGRAPHY.sans,
    fontSize: TYPOGRAPHY.sizes.xs - 1,
    color: COLORS.goldLight,
    fontWeight: '500',
    marginTop: 4,
  },
});
