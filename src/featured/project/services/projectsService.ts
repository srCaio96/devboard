import {
  collection,
  doc,
  getDocs,
  deleteDoc,
  updateDoc,
  addDoc,
  query,
  where,
} from "firebase/firestore";
import { db } from "../../../app/firebase/config";
import type { Project } from "../types/project";
import type { CreateProjectDTO, UpdtateProjectDTO } from "../types/dto";

const COLLECTION = "projects";

export async function getProjects(userId: string): Promise<Project[]> {
  const q = query(collection(db, COLLECTION), where("userId", "==", userId));

  const snapshot = await getDocs(q);

  return snapshot.docs.map((doc) => ({
    id: doc.id,
    ...doc.data(),
  })) as Project[];
}

export async function createProject(
  data: CreateProjectDTO & { userId: string },
) {
  return await addDoc(collection(db, COLLECTION), {
    ...data,
  });
}

export async function deleteProject(id: string) {
  await deleteDoc(doc(db, COLLECTION, id));
}

export async function updateProject(id: string, data: UpdtateProjectDTO) {
  await updateDoc(doc(db, COLLECTION, id), data);
}
