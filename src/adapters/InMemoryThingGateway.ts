import {ThingModel} from "../coreLogic/thing/thingModel";
import {ThingGateway} from "../coreLogic/thing/thingGateway";

export class InMemoryThingGateway implements ThingGateway {

    private readonly things: ThingModel[] = [];

    async retrieve(): Promise<ThingModel[]> {
        return this.things;
    }

    feedWith(things: ThingModel[]) {
        this.things.push(...things);
    }
}