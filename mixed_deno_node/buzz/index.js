import { Project } from "ts-morph";
import { logProject } from "@deno-workspace/fizz";

function createProject() {
    return new Project();
}

const project = createProject();
logProject(project);