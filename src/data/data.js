const data = {
    json1: {
        psu1: {
            status: "ok",
            volt: "123"
        },
        psu2: {
            status: "no",
            volt: "Power Supply AC lost"
        },
        mgmt1: {
            link_status: "no link",
            bps: 0
        },
        mgmt2: {
            link_status: "1000Mbit",
            bps: 92931
        },
        data1: {
            link_status: "100000Mbit",
            bps: 1234567
        },
        data2: {
            link_status: "100000Mbit",
            bps: 4565645
        }
    },
    json2: {
        psu1: {
            status: "no",
            volt: "Power Supply AC Lost"
        },
        psu2: {
            status: "ok",
            volt: 231
        },
        mgmt1: {
            link_status: "no link",
            bps: 149412
        },
        mgmt2: {
            link_status: "1000Mbit",
            bps: 149412
        },
        data1: {
            link_status: "100000Mbit",
            bps: 123567
        },
        data2: {
            link_status: "100000Mbit",
            bps: 455645
        }
    },
    json3: {
        psu1: {
            status: "ok",
            volt: "233"
        },
        psu2: {
            status: "ok",
            volt: "233"
        },
        mgmt1: {
            link_status: "no link",
            bps: 0
        },
        mgmt2: {
            link_status: "1000Mbit",
            bps: 12984
        },
        data1: {
            link_status: "100000Mbit",
            bps: 1003567
        },
        data2: {
            link_status: "100000Mbit",
            bps: 4055645
        }
    }
};

export default data;
