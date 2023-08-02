import useSWR from "swr";
import fetcher from "lib/fetcher";
import { Flex } from "components/Layout/Container/styles";
import { Container, Item } from "components/Posts/styles";
import { Data, ProjectsProps } from "lib/types";

export const Projects = () => {
  const { data } = useSWR<Data>("/api/github", fetcher);

  // Function to sort projects by date in descending order
  const sortByDateDesc = (projects: ProjectsProps[]) => {
    return projects.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
  };

  return (
    <Container>
      <h3>Featured Projects</h3>
      {data?.message ? (
        <h4>Maximum rate limit reached.</h4>
      ) : (
        data?.popular && sortByDateDesc(data.popular).map((item: ProjectsProps, id: number) => {
          return (
            <a
              href={item.htmlUrl}
              target="_blank"
              className="color-black"
              key={id}
              rel="noopener noreferrer"
            >
              <Item>
                <Flex>
                  <Flex>
                    <span className="item-number">{`${id < 9 ? "0" : ""}${
                      id + 1
                    }`}</span>
                    <h4>{item.name}</h4>
                  </Flex>
                  <span>{item.stars} Stars</span>
                  </Flex>
                <p>{item.description}</p>
              </Item>
            </a>
          );
        })
      )}
    </Container>
  );
};
