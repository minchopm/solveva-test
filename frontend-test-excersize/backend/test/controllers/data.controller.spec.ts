import {configureControllerTest, FastifyInstanceWithController} from "fastify-decorators/testing";
import {DataController} from "../../src/controllers/data.controller";

describe('Controllers: DataController', async () => {
    let instance: FastifyInstanceWithController<DataController>;

    beforeEach(async () => {
        instance = await configureControllerTest({controller: DataController});
    })

    it('should ....')
});
