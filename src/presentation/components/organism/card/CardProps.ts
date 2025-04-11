import { Repo } from "../../../hooks/useGithubRepos";
import { CardInfoProps } from "../../molecules/card-info/CardInfoProps";

export interface CardProps {
 cardInfo: CardInfoProps[];
 repo?: Repo
}