import WebServer from "./web.server";

// A simple test for the server start up using Jest, thi will use Async promise to execute the tests.

describe('Started', () => {
    let webServer = null


    beforeAll(() => {
        webServer = new WebServer()
    })

    test('should start and trigger a callback', async () => {
        let promise = webServer.start()
        await expect(promise).resolves.toBeUndefined()
    })

    test('should stop and trigger a callback', async () => {
        let promise = webServer.stop()
        await expect(promise).resolves.toBeUndefined()
    })
})