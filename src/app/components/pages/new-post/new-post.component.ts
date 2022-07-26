import { MessagesService } from 'src/app/services/messages.service';
import { Component, OnInit } from '@angular/core';
import { Moment } from 'src/app/Moment';
import { PostService } from 'src/app/services/post.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-new-post',
  templateUrl: './new-post.component.html',
  styleUrls: ['./new-post.component.css'],
})
export class NewPostComponent implements OnInit {
  btnText = 'Postar!';

  constructor(
    private postService: PostService,
    private messagesService: MessagesService,
    private router: Router
  ) {}

  ngOnInit(): void {}

  async createHandler(moment: Moment) {
    console.log('testecreatehandlerrrr');

    const formData = new FormData();

    formData.append('title', moment.title);
    formData.append('description', moment.description);

    if (moment.image) {
      formData.append('image', moment.image);
    }

    //todo

    //enviar para o service
    await this.postService.createPost(formData).subscribe();

    //exibir msg
    this.messagesService.add('Post adicionado com sucesso!');

    //redirect
    this.router.navigate(['/']);
  }
}
