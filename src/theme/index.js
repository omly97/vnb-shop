const COLORS =  {
    blueDark: '#1B263B',
    blueLight: '#415A77',
    black: '#191a1b',
};

const theme = {
    heading: {
        h6: {
            fontWeight: 'bold',
            fontSize: 16,
            marginTop: 10,
            marginBottom: 10,
            color: COLORS.blueDark,
        },
    },

    productSmallCard: {
        container: {
            height: 280,
            width: 150,
            borderBottomWidth: 5,
        },
        image: {
            width: '100%',
            height: 160,
        },
        title: {
            fontWeight: 'bold',
            fontSize: 13,
            textAlign: 'center',
            color: COLORS.blueDark,
        },
        price: {
            fontWeight: 'bold',
            fontSize: 15,
            textAlign: 'center',
            color: COLORS.blueLight,
        }
    },

    productLargeCard: {
        image: {
            width: '100%',
            height: 350,
            resizeMode: "cover",
        },
        title: {
            fontWeight: 'bold',
            fontSize: 17,
            textAlign: 'center',
            color: COLORS.black,
        },
        category: {
            marginTop: 5,
            backgroundColor: COLORS.black,
            fontSize: 1,
        },
        price: {
            fontWeight: 'bold',
            fontSize: 25,
            textAlign: 'left',
            color: COLORS.blueLight,
        },
        count: {
            fontSize: 18,
            fontWeight: 'bold',
            color: COLORS.blueDark,
        },
        description: {
            //marginTop: 10,
            textAlign: 'left',
            color: COLORS.blueDark,
        }
    },

    cart: {
        swipeViewLeft: {
            flex: 1,
            display: 'flex',
            flexDirection: 'column',
            height: "100%",
        },
        swipeBtnLeft: {
            flex: 1,
            height: "100%",
            justifyContent: "flex-start",
            borderRadius: 0,
        },
        swipeBtnRight: {
            flex: 1,
            height: "100%",
            justifyContent: "flex-end",
            borderRadius: 0
        },
        swipeBtnIconContainer: {
            height: "100%",
            width: 75,
            justifyContent: "center",
            alignItems: "center"
        },
        swipeBtnIcon: {
            fontSize: 30
        },
        productText1: {
            fontWeight: "bold",
            fontSize: 13,
            color: COLORS.blueDark,
        },
        productText2: {
            fontWeight: "bold",
            fontSize: 15,
            color: COLORS.blueLight,
            marginTop: 2,
        },
        checkoutText1: {
            fontWeight: "bold",
            fontSize: 15,
            textAlign: "center",
            color: COLORS.blueDark,
        },
        checkoutText2: {
            fontWeight: "bold",
            fontSize: 20,
            textAlign: "center",
            color: COLORS.blueLight,
        }
    }
}

export default theme;
