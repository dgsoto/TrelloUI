import { generateRandomString } from "../../../support/utils";

export class BoardConstants {
    static get boardTestData() {
        return {
            board_name: generateRandomString('board'),
        }
    }
}