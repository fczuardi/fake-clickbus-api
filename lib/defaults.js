module.exports = {
    places : {
        meta: '',
        items: [{
            id: 4017,
            station_id: 34523,
            slug: 'sao-paulo-tiete-sp',
            locale: 'pt-BR',
            name: '',
            is_primary: 'true',
            created_at: '2014-09-05 13:04:27',
            updated_at: '2014-09-05 13:04:59',
            place: {
                id: 34523,
                place_id: 4017,
                locale: 'pt-BR',
                name: 'Sao Paulo, SP - Tiete',
                created_at: '2014-09-05 13:04:27',
                updated_at: '2014-09-05 13:04:59',
                latitude: '-9.0237964',
                longitude: '-70.8119953',
                state: {
                    code: '',
                    name: 'Sao Paulo, SP - Tiete'
                }
            }
       },
       {
            id: 9209,
            station_id: 7648,
            slug: 'santos-sp',
            locale: 'pt-BR',
            name: 'Santos, SP',
            is_primary: 'true',
            created_at: '2014-05-26 16:19:36',
            updated_at: '2014-05-26 16:38:32',
            place: {
                id: 7648,
                place_id: 7648,
                locale: 'pt-BR',
                name: 'Santos, SP',
                created_at: '2014-05-26 16:19:36',
                updated_at: '2014-05-26 16:38:32',
                latitude: '',
                longitude: '',
                state: {
                    code: '',
                    name: 'Santos, SP'
                }
            }
        }]
    },
    trips: {
        meta: '',
        items: [{
            from: 'Sao Paulo, SP - Tiete',
            to: 'Santos, SP',
            parts: [{
                trip_id: '2949',
                departure: {
                    price: '2191',
                    waypoint: {
                        id: '4016',
                        prices: [{
                            waypoint: '3935',
                            price: '2191'
                        }],
                        schedule: {
                            id: 'NDAxNi0tMzkzNS0tMjAxNS0wMi0xMSAwMTowMC0tNy0tMjk0OS0tMS0tMS0tMS0tQ09OVg==',
                            date: '2015-02-11',
                            time: '01:00',
                            timezone: 'America/Sao_Paulo'
                        },
                        context: 'departure',
                        place: {
                            country: 'BRA',
                            state: '',
                            city: 'Sao Paulo, SP - Tiete',
                            station: {
                                current: {
                                    id: '4016',
                                    name: 'Sao Paulo, SP - Tiete',
                                    locale: 'en_US'
                                },
                                default: {
                                    id: '',
                                    name: '',
                                    locale: ''
                                }
                            },
                            locale: 'pt_BR',
                            id: '4016'
                        },
                        isDeparture: 'true',
                        position: '0'
                    }
                },
                arrival: {
                    price: '2191',
                    waypoint: {
                        id: '3935',
                        prices: [{
                            waypoint: '',
                            price: ''
                        }],
                        schedule: {
                            id: 'NDAxNi0tMzkzNS0tMjAxNS0wMi0xMSAwMTowMC0tNy0tMjk0OS0tMS0tMS0tMS0tQ09OVg==',
                            date: '2015-02-11',
                            time: '02:10',
                            timezone: 'America/Sao_Paulo'
                        },
                        context: 'arrival',
                        place: {
                            country: 'BRA',
                            state: '',
                            city: 'Santos, SP',
                            station: {
                                current: {
                                    id: '111',
                                    name: 'Santos, SP',
                                    locale: 'pt_BR'
                                },
                                default: {
                                    id: '',
                                    name: '',
                                    locale: ''
                                }
                            },
                            locale: 'pt_BR',
                            id: '3935'
                        },
                        isDeparture: 'false',
                        position: '0'
                    }
                },
                busCompany: {
                    name: 'Cometa',
                    id: '7',
                    logo: 'https://api-evaluation.clickbus.com.br/bundles/frontend/img/logos/buslines/small/bl-demon-s.png'
                },
                bus: {
                    serviceClass: 'Convencional',
                    name: 'Convencional',
                    id: '1'
                },
                waypoints: [{
                    id: '4016',
                    prices: [{
                        waypoint: '3935',
                        price: '2191'
                    }],
                    schedule: {
                        id: 'NDAxNi0tMzkzNS0tMjAxNS0wMi0xMSAwMTowMC0tNy0tMjk0OS0tMS0tMS0tMS0tQ09OVg==',
                        date: '2015-02-11',
                        time: '01:00',
                        timezone: 'America/Sao_Paulo'
                    },
                    context: 'departure',
                    place: {
                        country: 'BRA',
                        state: 'SÃ£o Paulo',
                        city: 'SÃ£o Paulo',
                        station: {
                            current: {
                                id: '4016',
                                name: 'Sao Paulo, SP - Tiete',
                                locale: 'pt_BR'
                            },
                            default: {
                                id: '',
                                name: '',
                                locale: ''
                            }
                        },
                        locale: 'pt_BR',
                        id: '123'
                    },
                    isDeparture: 'true',
                    position: '0'
                },
                {
                    id: '3935',
                    prices: [{
                        waypoint: '',
                        price: '2191'
                    }],
                    schedule: {
                        id: 'NDAxNi0tMzkzNS0tMjAxNS0wMi0xMSAwMTowMC0tNy0tMjk0OS0tMS0tMS0tMS0tQ09OVg==',
                        date: '2015-02-11',
                        time: '01:00',
                        timezone: 'America/Sao_Paulo'
                    },
                    context: 'arrival',
                    place: {
                        country: 'BRA',
                        state: '',
                        city: 'Santos, SP',
                        station: {
                            current: {
                                id: '3935',
                                name: 'Santos, SP',
                                locale: 'pt_BR'
                            },
                            default: {
                                id: '',
                                name: '',
                                locale: ''
                            }
                        },
                        locale: 'pt_BR',
                        id: ''
                    },
                    isDeparture: false,
                    position: 0
                }],
                seatTypes: [],
                products: [],
                availableSeats: '44'
            }]
        }]
    },
    tripsJ1: {
        error: [{
            code: 'J1',
            type: 'Invalid Parameters',
            message: 'Please provide the `from` parameter'
        }]
    },
    tripsJ9: {
        error: [{
            code: 'J9',
            type: 'Invalid Parameters',
            message: 'The `departure` date cannot occur in a day before today.'
        }]
    }
}
