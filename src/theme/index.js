const COLORS =  {
    blueDark: '#1B263B',
    blueLight: '#415A77',
    black: '#191a1b',
};

const theme = {
    colors: {
        blueDark: COLORS.blueDark,
        blueLight: COLORS.blueLight,
        black: COLORS.black,
    },

    heading: {
        h6: {
            fontWeight: 'bold',
            fontSize: 16,
            marginTop: 10,
            marginBottom: 10,
            color: COLORS.blueDark,
        },
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
