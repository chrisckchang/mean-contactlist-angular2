import { Component, Input, OnInit } from "@angular/core";

import { Post } from "../post";
import { PostService } from "../post.service";

import { AuthService } from "../../services/auth.service";

@Component({
  selector: "post-details",
  templateUrl: "./post-details.component.html",
  styleUrls: ["./post-details.component.css"]
})
export class PostDetailsComponent implements OnInit {
  eduProgramOptions = [
    { name: "Criação do ProUni", checked: false, value: 0 },
    { name: "Criação do ENEM e SiSu", checked: false, value: 1 },
    {
      name: "Aumento de vagas nas Universidades Federais",
      checked: false,
      value: 2
    },
    { name: "Novas Universidades Federais", checked: false, value: 3 },
    {
      name: "Criação de Campi de Universidades no interior",
      checked: false,
      value: 4
    },
    {
      name: "Criação de Campi de Institutos Federais no interior",
      checked: false,
      value: 5
    },
    { name: "Fortalecimento do FIES", checked: false, value: 6 },
    { name: "Cotas nas Universidades e IFs", checked: false, value: 7 },
    { name: "Universidade Aberta do Brasil", checked: false, value: 8 }
  ];

  // againstTo = [
  //   { name: "Escola sem partido", checked: false },
  //   { name: "Ensino à distância desde o ensino básico", checked: false },
  //   {
  //     name: "Proibição da discussão sobre sexualidade nas escolas",
  //     checked: false
  //   },
  //   { name: "Privatização das Universidades Federais", checked: false }
  // ];
  firstGraduatedOptions = {
    name: "Sou o primeiro da família a completar o ensino superior",
    checked: false,
    value: true
  };

  post: Post;
  postImg: Post;
  user: any;
  showImg: boolean;

  constructor(
    private postService: PostService,
    public authService: AuthService
  ) {}

  ngOnInit() {
    this.createNewPost();
    this.user = this.authService.getUserDetails();
    this.showImg = false;
  }

  createNewPost() {
    var post: Post = {
      owner: "",
      occupation: "",
      whoIAmToFamily: "",
      eduPrograms: "",
      firstGraduated: false
    };

    this.selectPost(post);
  }

  selectPost(post: Post) {
    this.post = post;
  }

  selectedOptions(list) {
    return list.filter(opt => opt.checked).map(opt => opt.name);
  }

  selectedEduProgramOptions() {
    return this.selectedOptions(this.eduProgramOptions);
  }

  selectedFirstGraduated() {
    return this.selectedOptions(this.eduProgramOptions);
  }

  createPost(post: Post) {
    post.user = this.user;
    post.owner = this.user.name;
    post.eduPrograms = this.selectedEduProgramOptions();
    this.postService.createPost(post).then(() => {
      console.log(post);
      this.createImage(post);
    });
  }

  updatePost(post: Post): void {
    this.postService.updatePost(post).then((updatedPost: Post) => {
      // this.updateHandler(updatedPost);
    });
  }

  deletePost(postId: String): void {
    this.postService.deletePost(postId).then((deletedPostId: String) => {
      // this.deleteHandler(deletedPostId);
    });
  }

  createImage(post): void {
    this.postImg = post;
    this.showImg = true;
  }
}
