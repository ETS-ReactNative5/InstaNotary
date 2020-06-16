import { StyleSheet, Dimensions } from "react-native";

const { width: winWidth, height: winHeight } = Dimensions.get("window");

export default StyleSheet.create({
  homeContainer: {
    flex: 1,
    flexDirection: "column",
    paddingTop: 48,
    backgroundColor: "#f5f5f5",
  },
  toolbarContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingRight: 24,
    paddingLeft: 24,
  },
  accountContainer: {
    flexDirection: "row",
    display: "flex",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#3a3a3a",
  },
  sponsorIcon: {
    height: 32,
    width: 32,
  },
  systemIcon: {
    height: 18,
    width: 18,
  },
  trashIcon: {
    height: 20,
    width: 20,
  },
  closeIcon: {
    height: 28,
    width: 28,
  },
  logoutButton: {
    flexDirection: "row",
    borderRadius: 4,
    padding: 6,
    backgroundColor: "#15548b",
    shadowColor: "rgba(0, 0, 0, 0.1)",
    shadowOpacity: 0.8,
    elevation: 10,
    shadowRadius: 15,
    shadowOffset: { width: 2, height: 2 },
    marginLeft: 12,
  },
  logoutText: {
    marginLeft: 4,
    color: "#ffffff",
  },
  searchContainer: {
    display: "flex",
    flexDirection: "row",
    marginVertical: 24,
    position: "relative",
    paddingRight: 24,
    paddingLeft: 24,
    elevation: 20,
    zIndex: 1000,
  },
  searchSection: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    borderColor: "#3a3a3a",
    borderWidth: 2,
    borderRadius: 6,
    padding: 2,
    paddingLeft: 18,
    paddingRight: 18,
    flex: 1,
    marginRight: 12,
  },
  searchInput: {
    fontSize: 14,
    marginLeft: 12,
    flex: 1,
  },
  sortButton: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 4,
    paddingBottom: 4,
    paddingTop: 4,
    paddingLeft: 12,
    paddingRight: 12,
    backgroundColor: "#3a3a3a",
    shadowColor: "rgba(0, 0, 0, 0.1)",
    shadowOpacity: 0.8,
    elevation: 10,
    shadowRadius: 15,
    shadowOffset: { width: 2, height: 2 },
    height: 36,
  },
  refreshButton: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 4,
    paddingBottom: 4,
    paddingTop: 4,
    paddingLeft: 12,
    paddingRight: 12,
    backgroundColor: "#3a3a3a",
    shadowColor: "rgba(0, 0, 0, 0.1)",
    shadowOpacity: 0.8,
    elevation: 10,
    shadowRadius: 15,
    shadowOffset: { width: 2, height: 2 },
    marginLeft: 8,
  },
  sortMenu: {
    position: "absolute",
    right: 75,
    top: 42,
    borderRadius: 6,
    elevation: 100,
    backgroundColor: "#fff",
    zIndex: 10000,
  },
  menuText: {
    width: 150,
    paddingTop: 8,
    paddingBottom: 8,
    paddingLeft: 24,
    fontWeight: "bold",
    zIndex: 100000,
    elevation: 2,
    paddingRight: 18,
  },
  borderTop: {
    borderTopWidth: 1,
    borderTopColor: "#d6d6d6",
    borderStyle: "solid",
  },
  fabButton: {
    width: 48,
    height: 48,
    backgroundColor: "#15548b",
    position: "absolute",
    bottom: 24,
    right: 24,
    borderRadius: 24,
    shadowColor: "rgba(0, 0, 0, 0.1)",
    shadowOpacity: 0.8,
    elevation: 6,
    shadowRadius: 15,
    shadowOffset: { width: 2, height: 2 },
    alignItems: "center",
    justifyContent: "center",
  },
  subView: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: "#FFFFFF",
    borderTopRightRadius: 8,
    borderTopLeftRadius: 8,
    height: 210,
    elevation: 100,
    paddingLeft: 24,
    paddingRight: 24,
    paddingTop: 18,
  },
  subViewTitle: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 18,
  },
  subViewButtonContainer: {
    flexDirection: "row",
    marginVertical: 10,
  },
  subViewHeaderContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "baseline",
    display: "flex",
  },
  backdrop: {
    flex: 1,
    backgroundColor: "rgba(0, 0, 0, 0.3)",
    opacity: 0.8,
    position: "absolute",
    top: 0,
    left: 0,
    // elevation: 10,
    // zIndex: 100,
    width: winWidth,
    height: winHeight + 50,
  },
  importButton: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 4,
    paddingBottom: 10,
    paddingTop: 10,
    paddingLeft: 12,
    paddingRight: 12,
    backgroundColor: "#15548b",
    shadowColor: "rgba(0, 0, 0, 0.1)",
    shadowOpacity: 0.8,
    elevation: 4,
    shadowRadius: 15,
    shadowOffset: { width: 0, height: 0 },
    width: "48%",
  },
  marginSet: {
    marginRight: 12,
    flexGrow: 0.9,
  },
  importText: {
    fontWeight: "bold",
    marginLeft: 4,
    color: "#ffffff",
    fontSize: 16,
  },
  notaryListView: {
    height: 200,
    overflow: "scroll",
  },
  listContainer: {
    flex: 1,
    flexDirection: "column",
    paddingHorizontal: 22,
    width: "100%",
  },
  notaryItemContainer: {
    elevation: 4,
    borderRadius: 6,
    backgroundColor: "#ffff",
    display: "flex",
    alignItems: "center",
    flexDirection: "row",
    paddingTop: 10,
    paddingBottom: 16,
    paddingRight: 18,
    paddingLeft: 18,
    marginBottom: 18,
    marginHorizontal: 3,
  },
  notaryItemType: {
    marginRight: 12,
    marginTop: 4,
    display: "flex",
    alignItems: "center",
    flexDirection: "row",
  },
  notaryItemDetails: {
    display: "flex",
    flex: 1,
  },
  notaryItemDetailsHeader: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },
  notaryItemDetailsHeaderTitle: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#323232",
    flex: 1,
  },
  notaryItemDetailsHeaderTime: {
    color: "#737373",
    fontSize: 13,
    marginRight: 8,
  },
  notaryItemDetailsDescriptionContainer: {
    flex: 1,
  },
  notaryItemDetailsDescription: {
    color: "#323232",
    fontSize: 16,
  },
  notaryItemDetailsHash: {
    color: "#323232",
    fontSize: 12,
    fontWeight: "bold",
    marginVertical: 4,
  },
  fileIcon: {
    height: 42,
    width: 42,
  },
  emptyIcon: {
    height: 150,
    width: 150,
  },
  emptyImageContainer: {
    flex: 1,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
  },
  emptyTitle: {
    fontSize: 24,
    fontWeight: "bold",
    marginVertical: 12,
  },
});
