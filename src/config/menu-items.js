export default {
    homepage: {
        id: 'homepage',
        name: 'Anasayfa',
        uri: '/',
        vueRouter: true,
        icon: 'fa fa-lg fa-fw fa-home'
    },
    test: {
        id: 'test',
        name: 'Test',
        icon: 'fa fa-lg fa-fw fa-desktop',
        list: {
            test2: {
                id: "test2",
                name: "Test 2",
                uri: "/test2",
                vueRouter: true,
                icon: 'fa fa-fw fa-folder-open'
            },
            test3: {
                id: "test3",
                name: "Test 3",
                icon: 'fa fa-fw fa-folder-open',
                list: {
                    test4: {
                        id: 'test4',
                        name: 'Test 4',
                        icon: 'fa fa-fw fa-folder-open',
                        uri: '/test3',
                        vueRouter: true
                    }
                }
            }
        }
    }
}