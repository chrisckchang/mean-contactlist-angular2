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
    { name: "Criação do ProUni", checked: false },
    { name: "Criação do ENEM e SiSu", checked: false },
    { name: "Aumento de vagas nas Universidades Federais", checked: false },
    { name: "Novas Universidades Federais", checked: false },
    { name: "Criação de Campi de Universidades no interior", checked: false },
    {
      name: "Criação de Campi de Institutos Federais no interior",
      checked: false
    },
    { name: "Fortalecimento do FIES", checked: false },
    { name: "Cotas nas Universidades e IFs", checked: false },
    { name: "Universidade Aberta do Brasil", checked: false }
  ];

  againstTo = [
    { name: "Escola sem partido", checked: false },
    { name: "Ensino à distância desde o ensino básico", checked: false },
    {
      name: "Proibição da discussão sobre sexualidade nas escolas",
      checked: false
    },
    { name: "Privatização das Universidades Federais", checked: false }
  ];

  firstGraduated = false;
  firstGraduatedValue = "Sou o primeiro da família a completar o ensino superior";

  post: Post;
  user: any;

  constructor(
    private postService: PostService,
    public authService: AuthService
  ) {}

  ngOnInit() {
    this.createNewPost();
    this.user = this.authService.getUserDetails();
  }

  createNewPost() {
    var post: Post = {
      owner: "",
      occupation: "",
      whoIAmToFamily: "",
      eduPrograms: "",
      againstTo: ""
    };

    // By default, a newly-created post will have the selected state.
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

  selectedAgainstToOptions() {
    return this.selectedOptions(this.eduProgramOptions);
  }

  createPost(post: Post) {
    if (this.firstGraduated)
      post.whoIAmToFamily += this.firstGraduatedValue + ". ";

    let mEduProgramOptions = "";
    this.eduProgramOptions.forEach(option => {
      if (option.checked) {
        mEduProgramOptions += option.name + ", ";
      }
    });
    post.eduPrograms = mEduProgramOptions.slice(0, -1);

    let mAgainstTo = "";
    this.againstTo.forEach(option => {
      if (option.checked) {
        mAgainstTo += option.name + ", ";
      }
    });
    post.againstTo = mAgainstTo.slice(0, -1);

    this.postService.createPost(post).then((newPost: Post) => {
      // this.createHandler(newPost);
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
}
