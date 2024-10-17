;; social-app contract

(define-data-var posts (list 100 {content: (string-utf8 280), author: principal}) (list))

(define-public (post-message (content (string-utf8 280)))
  (let ((new-post {content: content, author: tx-sender}))
    (var-set posts (unwrap-panic (as-max-len? (concat (var-get posts) (list new-post)) u100)))
    (ok true)))

(define-read-only (get-posts)
  (ok (var-get posts)))

(define-public (tip-author (post-index uint) (amount uint))
  (let ((post (unwrap-panic (element-at (var-get posts) post-index))))
    (stx-transfer? amount tx-sender (get author post))))